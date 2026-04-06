# ono.ar

Landing comercial para ofrecer desarrollo web y software a medida.

## Stack

- Frontend: React 19 + Vite
- Hosting: Firebase Hosting
- Backend: Firebase Functions
- Email transaccional: Resend
- Persistencia de consultas: Firestore

## Desarrollo local

```bash
npm install
npm run dev
```

Para probar el formulario en local tienes dos opciones:

1. Usar el proxy de Vite (configurado por defecto) y enviar a la Function desplegada.
2. Definir `VITE_CONTACT_PROXY_TARGET` en `.env.local` para cambiar el backend del proxy.
3. Alternativamente, definir `VITE_CONTACT_ENDPOINT` para saltar el proxy y usar una URL directa.

Ejemplo:

```bash
VITE_CONTACT_PROXY_TARGET=https://us-central1-ono-ar.cloudfunctions.net
# opcional: VITE_CONTACT_ENDPOINT=https://us-central1-ono-ar.cloudfunctions.net/contactForm
```

## Configuracion del envio real de consultas

La Function `contactForm`:

- valida y sanea el payload
- guarda cada consulta en Firestore (`contactSubmissions`)
- envia un email real usando Resend

Antes del primer deploy productivo necesitas:

1. Crear Firestore en el proyecto `ono-ar`.
2. Cargar el secreto de Resend.
3. Crear el archivo `functions/.env.ono-ar` a partir de `functions/.env.ono-ar.example`.

Secreto:

```bash
firebase functions:secrets:set RESEND_API_KEY
```

Variables no secretas:

```bash
copy functions/.env.ono-ar.example functions/.env.ono-ar
```

Luego edita `functions/.env.ono-ar` con los valores reales. Si vas a probar desde varios dominios temporales, puedes dejar `CONTACT_ALLOWED_ORIGIN=*` y endurecerlo despues.

Para pruebas iniciales puedes dejar `CONTACT_FROM_EMAIL=ono.ar <onboarding@resend.dev>`. Cuando verifiques tu dominio en Resend, cambialo por una direccion propia como `contacto@ono.ar`.

Creacion de Firestore:

```bash
firebase firestore:databases:create --location=us-central1 '(default)'
```

Si prefieres otra region, cambiala antes del primer alta. Esa decision es practicamente permanente.

## Deploy

```bash
npm run deploy
```

## Emuladores

```bash
npm run emulators
```
