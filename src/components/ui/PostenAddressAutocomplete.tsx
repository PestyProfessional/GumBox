'use client';

import { TextField, TextFieldProps, Autocomplete, Box, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { LocationOn } from '@mui/icons-material';

interface AddressResult {
  adressenavn: string;
  nummer?: number;
  postnummer: string;
  poststed: string;
  kommunenavn: string;
  adressetekst: string;
}

interface PostenAddressAutocompleteProps extends Omit<TextFieldProps, 'onChange'> {
  onAddressSelect?: (address: {
    fullAddress: string;
    street: string;
    postalCode: string;
    city: string;
    municipality: string;
  }) => void;
  onChange?: (value: string) => void;
}

export default function PostenAddressAutocomplete({
  onAddressSelect,
  onChange,
  ...textFieldProps
}: PostenAddressAutocompleteProps) {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<AddressResult[]>([]);
  const [loading, setLoading] = useState(false);

  // Debounced search function
  useEffect(() => {
    if (inputValue.length < 3) {
      setOptions([]);
      return;
    }

    const searchTimeout = setTimeout(async () => {
      setLoading(true);
      try {
        // Use GeoNorge API (Norwegian mapping authority)
        const response = await fetch(
          `https://ws.geonorge.no/adresser/v1/sok?sok=${encodeURIComponent(inputValue)}&treffPerSide=10&asciiKompatibel=true`
        );
        
        if (response.ok) {
          const data = await response.json();
          const formattedResults: AddressResult[] = data.adresser?.map((addr: any) => ({
            adressenavn: addr.adressenavn || '',
            nummer: addr.nummer || null,
            postnummer: addr.postnummer || '',
            poststed: addr.poststed || '',
            kommunenavn: addr.kommunenavn || '',
            adressetekst: addr.adressetekst || ''
          })) || [];
          setOptions(formattedResults);
        }
      } catch (error) {
        console.warn('Address search error:', error);
        setOptions([]);
      } finally {
        setLoading(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(searchTimeout);
  }, [inputValue]);

  const handleAddressSelect = (address: AddressResult | null) => {
    if (!address) return;

    const street = address.adressetekst || `${address.adressenavn}${address.nummer ? ` ${address.nummer}` : ''}`;
    const fullAddress = `${street}, ${address.postnummer} ${address.poststed}`;

    onAddressSelect?.({
      fullAddress,
      street,
      postalCode: address.postnummer,
      city: address.poststed,
      municipality: address.kommunenavn
    });
  };

  const formatOptionLabel = (option: AddressResult): string => {
    return option.adressetekst || `${option.adressenavn}${option.nummer ? ` ${option.nummer}` : ''}`;
  };

  return (
    <Autocomplete
      options={options}
      loading={loading}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
        onChange?.(newInputValue);
      }}
      onChange={(_, selectedOption) => handleAddressSelect(selectedOption)}
      getOptionLabel={formatOptionLabel}
      filterOptions={(x) => x} // Disable client-side filtering since we do server-side search
      renderInput={(params) => (
        <TextField
          {...params}
          {...textFieldProps}
          InputProps={{
            ...params.InputProps,
            ...textFieldProps.InputProps,
          }}
        />
      )}
      renderOption={(props, option) => (
        <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOn sx={{ color: 'text.secondary', fontSize: 20 }} />
          <Box>
            <Typography variant="body2">
              {formatOptionLabel(option)}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {option.postnummer} {option.poststed}, {option.kommunenavn}
            </Typography>
          </Box>
        </Box>
      )}
      noOptionsText={
        inputValue.length < 3 
          ? "Type minst 3 tegn for å søke"
          : loading
          ? "Søker..."
          : "Ingen adresser funnet"
      }
      loadingText="Søker adresser..."
    />
  );
}