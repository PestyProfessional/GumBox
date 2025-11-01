# GumBox Next.js Frontend Integration

This Next.js frontend replaces the previous Vue.js frontend and integrates with the existing .NET Core Azure Functions backend.

## 🔗 Backend Integration

### API Endpoints
The frontend connects to these backend endpoints:
- `GET /api/v2/products` - Products with pagination, filtering, search
- `GET /api/v2/boxes` - GumBoxes with pricing and availability  
- `GET /api/v2/search/products` - Advanced product search with relevance scoring
- `GET /api/v2/products/{id}` - Single product details
- `GET /api/v2/boxes/{id}` - Single GumBox details

### API Client
- **Location**: `src/lib/api/`
- **Main Client**: `client.ts` - Handles all API communication
- **Type Definitions**: `types.ts` - TypeScript interfaces for API responses
- **Data Adapters**: `adapters.ts` - Converts PascalCase (.NET) to camelCase (React)

### Data Flow
1. **API Responses**: .NET backend returns PascalCase JSON
2. **Adapters**: Convert to camelCase for React components
3. **Type Safety**: Full TypeScript support with proper interfaces
4. **Error Handling**: Comprehensive error handling and logging

## 🛠 Configuration

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_API_BASE_URL=http://localhost:7071
NEXT_PUBLIC_DEFAULT_CURRENCY=NOK
NEXT_PUBLIC_DEFAULT_VAT_REGION=NO
```

### Development Setup
```bash
cd gumbox-shop
npm install
npm run dev
```

The frontend will run on `http://localhost:3000` and connect to the Azure Functions backend on `http://localhost:7071`.

## 🔄 Migration from Vue.js

### What Changed
- **Framework**: Vue.js 3 → Next.js 15 + React 19
- **Styling**: Maintained Tailwind CSS + MUI
- **API Integration**: Enhanced with proper TypeScript types
- **State Management**: React Context instead of Pinia
- **SEO**: Added comprehensive SEO optimizations

### What Stayed the Same
- **Backend API**: No changes to .NET Azure Functions
- **Data Models**: Same API response structures
- **Business Logic**: Same subscription and cart functionality
- **Styling**: Same visual design and branding

## 📁 Project Structure

```
gumbox-shop/
├── src/
│   ├── lib/api/           # Backend integration layer
│   │   ├── client.ts      # Main API client
│   │   ├── types.ts       # TypeScript interfaces
│   │   ├── adapters.ts    # Data transformation
│   │   └── index.ts       # Exports
│   ├── components/        # React components
│   ├── contexts/          # React Context providers
│   ├── app/              # Next.js app router pages
│   └── hooks/            # Custom React hooks
├── .env.local            # Environment configuration
└── next.config.mjs       # Next.js configuration
```

## 🚀 Features

### Enhanced SEO
- JSON-LD structured data for rich snippets
- Global keyword optimization (Norwegian + International)
- Enhanced OpenGraph and Twitter cards
- Optimized sitemap and robots.txt

### Performance
- Next.js 15 optimizations
- Image optimization with WebP/AVIF
- Bundle optimization for MUI components
- Caching strategies

### API Integration
- Full TypeScript support
- Automatic data transformation (PascalCase ↔ camelCase)
- Error handling and retry logic
- Currency and VAT region support

## 🔗 Backend Compatibility

This frontend is fully compatible with:
- **GumBox Functions**: The .NET Core Azure Functions backend
- **API v2**: Enhanced endpoints with pagination and search
- **Pricing System**: Multi-currency and VAT calculations
- **Admin Portal**: Shares the same backend data models

## 📊 Development Workflow

1. **Start Backend**: Run Azure Functions (`gumboxfunctions`)
2. **Start Frontend**: Run Next.js development server
3. **API Testing**: Use `test_api.http` file for endpoint testing
4. **Database**: Functions connect to the configured database

## 🎯 Next Steps

- **Production Deployment**: Configure production API URLs
- **Authentication**: Integrate user accounts and authentication
- **Payment Processing**: Connect Vipps and other payment providers
- **Analytics**: Enhanced tracking and conversion monitoring

The frontend is now ready for development and production deployment with full backend integration!