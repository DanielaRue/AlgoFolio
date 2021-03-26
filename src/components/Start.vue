<template>
    <div>

        <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">AlgoFolio</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#">Diseños</b-nav-item>
                <b-nav-item href="#">Código</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Buscar"></b-form-input>
                <b-button pill size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
                </b-nav-form>

                <b-nav-item-dropdown right>
                <template #button-content>
                    <em>Perfil</em>
                </template>
                <b-dropdown-item href="#">Perfil</b-dropdown-item>
                <b-dropdown-item href="#">Salir</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </div>

        <b-container fluid>
            <b-row>
                <b-col cols="8">
                    <div class="shadow-sm p-3 mb-5 bg-white rounded">
                        <div class="shadow-sm p-3 mb-5 bg-white rounded">
                            Usuario 1
                        </div>
                        <div class="shadow-sm p-3 mb-5 bg-white rounded">
                            Usuario 2
                        </div>
                        <div class="shadow-sm p-3 mb-5 bg-white rounded">
                            Usuario n
                        </div>
                    </div>
                </b-col>
                <b-col cols="4">
                    <div class="shadow-sm p-3 mb-5 bg-white rounded">
                        <div>
                            <b-avatar class="mr-3" badge="6" variant="dark" badge-variant="light"></b-avatar>
                            <span class="mr-auto"><em>DanielaRueP</em></span>
                        </div>
                        <b-container fluid class="p-4">
                        <b-row>
                            <b-col>
                            <b-img fluid src="https://jordiensenyatdisseny.com/wp-content/uploads/009_mejores-disenos-web-2018-2019_bionic-sports.jpg"></b-img>
                            </b-col>
                            <b-col>
                            <b-img fluid src="https://www.tusclicks.com/blog/wp-content/uploads/2019/10/hero-design-web.jpg"></b-img>
                            </b-col>
                            <b-col>
                            <b-img fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2MmHhag6BqNbzOE-5JjeMlRZKd8BYk579kA&usqp=CAU"></b-img>
                            </b-col>
                        </b-row>
                        </b-container>
                        <b-container fluid class="p-4">
                        <b-row>
                            <b-col>
                            <b-img fluid src="https://www.todobravo.es/wp-content/uploads/2017/10/TodoBravo_Web_Trends_2018_Tendencias_Diseno_Web_2018_Botones_Fantasma.jpg"></b-img>
                            </b-col>
                            <b-col>
                            <b-img fluid src="https://www.todobravo.es/wp-content/uploads/2017/10/TodoBravo_Web_Trends_2018_Tendencias_Diseno_Web_2018_Hero_Image_half_screen2.jpg"></b-img>
                            </b-col>
                            <b-col>
                            <b-img fluid src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOJeUFrj2mXmlokXKXWrmVZ1Wj0DankAV7A&usqp=CAU"></b-img>
                            </b-col>
                        </b-row>
                        </b-container>
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
    .bg-info {
    background-color: white  !important;
    }
    .btn-secondary:hover {
    color: #fff;
    background-color: #fe4e00;
    border-color: #fe4e00;
    }
    .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
    color: #fe4e00;
    }
    .navbar-dark .navbar-brand {
    color: #fe4e00;
    }
    .btn-secondary {
    color: #fff;
    background-color: #fe4e00;
    border-color: #fe4e00;
    }
    .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
    color: #fe4e00;
    }
    .navbar-dark .navbar-nav .nav-link {
    color: #eb984e;
    }
</style>