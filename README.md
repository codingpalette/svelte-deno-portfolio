# svelte-deno-boiler-plate

### deno 설치

2020-09-18 기준 1.4.0 버전 설치하면 오류가 발생함 1.3.0 버전 설치 권장  

With Shell
```
curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.3.0
```

With PowerShell
```
$v="1.3.0"; iwr https://deno.land/x/install/install.ps1 -useb | iex
```

### deno .env 파일
```
MONGOOSE_KEY=mongodb+srv://

DB_NAME=svelte

JWT_SECRET_KEY=some-random-key

JWT_EXP_DURATION=3600000
```

### deno 실행
```
deno run -A --unstable server.ts
```

### svelte 실행
```
npm i
npm run dev
```
