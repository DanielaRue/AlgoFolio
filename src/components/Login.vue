<template>
    <div>
        <b-container fluid>
            <b-row class="justify-content-md-center" align-v="center">
                <b-col cols="4" class="shadow p-3 mb-5 bg-white rounded">
                    
                    <b-nav tabs align="center">
                        <b-nav-item active>Inicio</b-nav-item>
                        <b-nav-item to="Register">Registro</b-nav-item>
                        <b-nav-item to="Pass">Olvidé mi contraseña</b-nav-item>
                    </b-nav>
                        
                    <b-form class="icons">
                        <b-row class="my-4">
                            <b-col sm="3">
                                <label for="username">
                                    <p class="h4 mb-2"><b-icon icon="person-fill"></b-icon></p>
                                </label>
                            </b-col>
                            <b-col sm="8">
                             <b-form-input v-model="text" id="username" placeholder="Usuario"></b-form-input>
                            </b-col>
                        </b-row>
                        <b-row class="my-4">
                            <b-col sm="3">
                                <label for="password">
                                    <p class="h4 mb-2"><b-icon icon="lock-fill"></b-icon></p>
                                </label>
                            </b-col>
                            <b-col sm="8">
                             <b-form-input type="password" id="password" placeholder="Contraseña" aria-describedby="password-help-block"></b-form-input>
                            </b-col>
                        </b-row>

                    </b-form>

                    <div class=" pt-3">
                        <b-button pill block variant="dark" to="Start">INICIAR SESIÓN</b-button>
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
    a{
        color: grey;
        text-decoration: none;
        background-color: transparent;
    }
    a:hover {
        color:#fe4e00;
        text-decoration: underline;
    }
    .icons{
        text-align: center;
        color: #fe4e00;
    }
</style>