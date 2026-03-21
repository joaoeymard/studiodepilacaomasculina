
# Studio Depilacao Masculina

Landing page em React + Vite.

## Desenvolvimento local

### Com Docker

Execute:

```bash
docker compose up --build
```

O servidor de desenvolvimento ficará disponível em `http://localhost:5173` com hot reload.

### Sem Docker

Execute:

```bash
npm install
npm run dev
```

## Deploy automático no GitHub Pages

O repositório possui um workflow em `.github/workflows/deploy-pages.yml` que:

- roda em cada `push` para a branch `main`;
- instala as dependências com `npm install`;
- executa `npm run build`;
- publica o conteúdo de `dist/` no GitHub Pages.

Para o deploy funcionar, habilite no GitHub:

1. `Settings > Pages`
2. `Build and deployment > Source`
3. selecione `GitHub Actions`

Após isso, a publicação será feita automaticamente a cada commit na `main`.
  
