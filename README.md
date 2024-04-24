# Blogiz-Starter-Pack

## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the project using `npm run dev`.

## How to configure Redux to your project

1.Install Redux
2.create redux folder and store file
3.create lib folder and a provider 4. Rap the layout html in That provider

```
 return (
    <Providers>
      <html lang="en" data-theme="light">
      <body className={roboto.className}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
    </Providers>
  );
```

5.create api folder and create your necessary api and config that into the store

```
  reducer: {
        [baseApi.reducerPath]: baseApi.reducer,

    },
```

6. Add middleware in the store

```

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
```

