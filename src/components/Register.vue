<template>
    <div>
        <b-container fluid>
            <b-row class="justify-content-md-center" align-v="center">
                <b-col cols="4" class="shadow p-3 mb-5 bg-white rounded">
                    
                    <b-nav tabs align="center">
                        <b-nav-item to="Login">Inicio</b-nav-item>
                        <b-nav-item active>Registro</b-nav-item>
                        <b-nav-item to="Pass">Olvidé mi contraseña</b-nav-item>
                    </b-nav>
                        
                    <b-form class="icons">
                        <b-row class="my-4">
                            <b-col sm="4">
                                <label for="username">
                                    <p class="h4 mb-2"><b-icon icon="person"></b-icon></p>
                                </label>
                            </b-col>
                            <b-col sm="7">
                             <b-form-input v-model="text" id="username" placeholder="Ingrese su usuario"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col sm="4">
                                <label for="email">
                                    <p class="h4 mb-2"><b-icon icon="mailbox"></b-icon></p>
                                </label>
                            </b-col>
                            <b-col sm="7">
                             <b-form-input v-model="text" type="email" id="email" placeholder="Ingrese su correo" required></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col sm="4">
                                <label for="password">
                                    <p class="h4 mb-2"><b-icon icon="lock"></b-icon></p>
                                </label>
                            </b-col>
                            <b-col sm="7">
                             <b-form-input type="password" id="password" placeholder="Ingrese su contraseña" aria-describedby="password-help-block"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col sm="4">
                                <label for="confirm_password">
                                    <p class="h4 mb-2"><b-icon icon="lock"></b-icon></p>
                                </label>
                            </b-col>
                            <b-col sm="7">
                             <b-form-input type="password" id="confirm_password" placeholder="Confirme su contraseña" aria-describedby="password-help-block"></b-form-input>
                            </b-col>
                        </b-row>

                    </b-form>

                    <div class=" pt-3">
                        <b-button pill block variant="dark">REGISTRARSE</b-button>
                    </div>

                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .icons{
        text-align: center;
        color: #fe4e00;
    }
</style>