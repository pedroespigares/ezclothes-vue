<script setup>
import Header from './Header.vue';
</script>

<template>
    <div class="container">
        <Header/>
        <section id="login_signup">
            <div class="login--container">
                <h1>Soy Cliente/a</h1>
                <form class="LI_form">
                    <input id="LI_username" name="LI_username" type="text" placeholder="Nombre de usuario" required>
                    <input id="LI_psw" name="LI_psw" type="password" placeholder="Contraseña" required>
                    <a>¿Has olvidado tu contraseña?</a>
                    <a id="activate_SU">¿No tienes cuenta? ¡Regístrate!</a>
                    <p id="login--message">Sesión iniciada</p>
                    <p id="login--error">Usuario o contraseña incorrectos</p>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
            <div class="signup--container">
                <h1>¿No tienes cuenta?</h1>
                <p>Regístrate y disfruta de todas las ventajas de ser cliente de EzClothes</p>
                <form class="SU_form">
                    <input id="SU_username" name="SU_username" type="text" placeholder="Nombre de usuario" disabled required>
                    <input id="SU_name" name="SU_name" type="text" placeholder="Nombre" disabled required>
                    <input id="SU_surname" name="SU_surname" type="text" placeholder="Apellidos" disabled required>
                    <input id="SU_phone" name="SU_phone" type="tel" placeholder="Teléfono (123456789)" pattern="[0-9]{9}" maxlength="9" disabled required>
                    <input id="SU_mail" name="SU_mail" type="email" placeholder="tucorreo@dominio.com" disabled required>
                    <input id="SU_psw" name="SU_psw" type="password" placeholder="Contraseña" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" title="UpperCase, LowerCase, Number/SpecialChar and min 8 Chars" disabled required>
                    <a id="activate_LI">¿Ya tienes cuenta? ¡Inicia sesión!</a>
                    <p id="signup--message">¡Registro realizado con éxito! Para activar su cuenta, confirme su correo</p>
                    <button type="submit" disabled>Crear cuenta</button>
                </form>
            </div>
        </section>
        </div>
</template>