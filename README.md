# ezClothesVue

## Enlace a pagina en producción
https://ezclothes-vue.web.app/

## Puntos importantes sobre el proyecto
<ul>
<li><a href="https://ezclothes-vue.web.app/register-only-for-admins">Enlace de registro</a>
<li>He incluido un registro/logeo con GitHub también, pero hay una cosa importante sobre ello.
Si has creado una cuenta con Google, <b>NO</b> podrás crear una cuenta con GitHub que utilice el mismo correo que la cuenta de Google y viceversa.
Es decir, si la cuenta de Google y de Github utilizar el mismo correo, solo podrás crear una cuenta con uno de los dos.
</li>
<li>En el formulario de crear producto, el boton de crear estará desabilitado hasta que la imagen se haya subido a firebase para evitar
  errores, ya que si le das antes de que se suba, el addDoc dará error ya que interpretará la imagen como un objeto HTML.
</li>
</ul>

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
