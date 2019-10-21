@extends('layouts.app')

{{-- @section('content')
    
@endsection --}}
<div class='container'>

<br><br>
<h1>Sobre</h1>
<br>
<style>
    #icon_dev {
        width: 250px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
    }
    .container {
        margin-bottom: 300px;
    }
    #texto {
        text-align: justify;
    }
    @media (orientation: portrait) {
        #card {
            margin: auto;
        }
    }
</style>

<div class="row">
    <div class="col-md-6">
        <img src="storage/icon-devs/devs.png" alt="Dev Team" width='100%;'>
    </div>
    <div class="col-md-6">
        <p id='texto'>O ifbox é um repositório de trabalhos do Instituto Federal Catarinense - 
            Campus Rio do Sul, no qual possui como objetivo o compartilhamento e a 
            visualização de artigos e trabalhos desenvolvidos a partir de disciplinas e eventos.<p>
        <p id='texto'>Foi desenvolvido pelos alunos da 6ª fase do do curso de bacharelado em Ciência 
            da Computação, integrantes da disciplina de Desenvolvimento Web II, juntamente 
            com o professor MSc. Rodrigo Curvêllo. </p>
    </div>
</div>

<br><h2>Dev Team</h2><br>
<div class="card-deck">
    <div id='card' class="card text-center border-0 bg-transparent" style="width: 18rem; min-width: 200px;">
        <div class="mx-auto">
            <img id='icon_dev' src="storage/icon-devs/carlos-torres.png" 
                class="card-img-top rounded-circle" alt="Carlos-T" style="width: 200px;">
        </div>
        <div class="card-body">
            <h5 class="card-title text-sucess font-weight-bold">Carlos Torres</h5>
            <h6 class="card-subtitle mb-2 text-primary">DASHBOARD DEVELOPER</h6>
            <p class="card-text font-italic">carlos_at5@hotmail.com<br>
                <a href="https://github.com/Carlos-T" target="_blank">
                    <img width="30" src="storage/icon-social-media/icon-github.png" alt="github">
                </a>
            </p>
        </div>
    </div>
    <div id='card' class="card text-center border-0 bg-transparent" style="width: 18rem; min-width: 200px;">
        <div class="mx-auto">
            <img id='icon_dev' src="storage/icon-devs/filipe-pedroso.jpeg" 
                class="card-img-top rounded-circle" alt="LuisFilipePedroso" style="width: 200px;">
        </div>
        <div class="card-body">
            <h5 class="card-title text-sucess font-weight-bold">Luis Pedroso</h5>
            <h6 class="card-subtitle mb-2 text-primary">BACKEND DEVELOPER</h6>
            <p class="card-text font-italic">luis_filipe42@outlook.com<br>
                <a href="https://github.com/LuisFilipePedroso" target="_blank" style="margin-right: 10px;">
                    <img width="30" src="storage/icon-social-media/icon-github.png" alt="github">
                </a>
                <a href=""></a>
                <a href="https://www.linkedin.com/in/luisfilipe42/" target="_blank">
                    <img width="30" src="storage/icon-social-media/icon-linkedin.png" alt="linkedin">
                </a>
            </p>
        </div>
    </div>
    <div id='card' class="card text-center border-0 bg-transparent" style="width: 18rem; min-width: 200px;">
        <div class="mx-auto">
            <img id='icon_dev' src="storage/icon-devs/gabriel-frontorio.jpeg" 
                class="card-img-top rounded-circle" alt="frontorio" style="width: 200px;">
        </div>
        <div class="card-body">
            <h5 class="card-title text-sucess font-weight-bold">Gabriel Frontório</h5>
            <h6 class="card-subtitle mb-2 text-primary">FRONTEND DEVELOPER</h6>
            <p class="card-text font-italic">gabrielfrontorio@hotmail.com<br>
                <a href="https://github.com/frontorio" target="_blank" style="margin-right: 10px;">
                    <img width="30" src="storage/icon-social-media/icon-github.png" alt="github">
                </a>
                <a href=""></a>
                <a href="https://www.linkedin.com/in/frontorio/" target="_blank">
                    <img width="30" src="storage/icon-social-media/icon-linkedin.png" alt="linkedin">
                </a>
            </p>
        </div>
    </div>
    <div id='card' class="card text-center border-0 bg-transparent" style="width: 18rem; min-width: 200px;">
        <div class="mx-auto">
            <img id='icon_dev' src="storage/icon-devs/gabriel-peron.jpg" 
                class="card-img-top rounded-circle" alt="GabiPeron" style="width: 200px;">
        </div>
        <div class="card-body">
            <h5 class="card-title text-sucess font-weight-bold">Gabriel Peron</h5>
            <h6 class="card-subtitle mb-2 text-primary">FRONTEND DEVELOPER</h6>
            <p class="card-text font-italic">Peronn07@gmail.com<br>
                <a href="https://github.com/GabiPeron" target="_blank" style="margin-right: 10px;">
                    <img width="30" src="storage/icon-social-media/icon-github.png" alt="github">
                </a>
                <a href=""></a>
                <a href="https://www.linkedin.com/in/gabriel-peron-740bba187/" target="_blank">
                    <img width="30" src="storage/icon-social-media/icon-linkedin.png" alt="linkedin">
                </a>
            </p>
        </div>
    </div>
    <div id='card' class="card text-center border-0 bg-transparent" style="width: 18rem; min-width: 200px;">
        <div class="mx-auto">
            <img id='icon_dev' src="storage/icon-devs/joao-back.jpeg" 
                class="card-img-top rounded-circle" alt="backjoao88" style="width: 200px;">
        </div>
        <div class="card-body">
            <h5 class="card-title text-sucess font-weight-bold">João Back</h5>
            <h6 class="card-subtitle mb-2 text-primary">BACKEND DEVELOPER</h6>
            <p class="card-text font-italic">joaoback47@gmail.com<br>
                <a href="https://github.com/backjoao88" target="_blank" style="margin-right: 10px;">
                    <img width="30" src="storage/icon-social-media/icon-github.png" alt="github">
                </a>
                <a href=""></a>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-back-90874614b/" target="_blank">
                    <img width="30" src="storage/icon-social-media/icon-linkedin.png" alt="linkedin">
                </a>
            </p>
        </div>
    </div>
    <div id='card' class="card text-center border-0 bg-transparent" style="width: 18rem; min-width: 200px;">
        <div class="mx-auto">
            <img id='icon_dev' src="storage/icon-devs/luigi-kita.png" 
                class="card-img-top rounded-circle" alt="LuigiTakeoKita" style="width: 200px;">
        </div>
        <div class="card-body">
            <h5 class="card-title text-sucess font-weight-bold">Luigi Kita</h5>
            <h6 class="card-subtitle mb-2 text-primary">DASHBOARD DEVELOPER</h6>
            <p class="card-text font-italic">luigikita@gmail.com<br>
                <a href="https://github.com/LuigiTakeoKita" target="_blank" style="margin-right: 10px;">
                    <img width="30" src="storage/icon-social-media/icon-github.png" alt="github">
                </a>
                <a href=""></a>
                <a href="https://www.linkedin.com/in/luigi-takeo-kita-54554b16b/" target="_blank">
                    <img width="30" src="storage/icon-social-media/icon-linkedin.png" alt="linkedin">
                </a>
            </p>
        </div>
    </div>
    <div id='card' class="card text-center border-0 bg-transparent" style="width: 18rem; min-width: 200px;">
        <div class="mx-auto">
            <img id='icon_dev' src="storage/icon-devs/luis-nienkotter.png" 
                class="card-img-top rounded-circle" alt="LuisGustavoBlockNienkotter" style="width: 200px;">
        </div>
        <div class="card-body">
            <h5 class="card-title text-sucess font-weight-bold">Luis Nienkotter</h5>
            <h6 class="card-subtitle mb-2 text-primary">BACKEND DEVELOPER</h6>
            <p class="card-text font-italic">luis.block.nienk@gmail.com<br>
                <a href="https://github.com/LuisGustavoBlockNienkotter" target="_blank">
                    <img width="30" src="storage/icon-social-media/icon-github.png" alt="github">
                </a>
            </p>
        </div>
    </div>
    <div id='card' class="card text-center border-0 bg-transparent" style="width: 18rem; min-width: 200px;">
        <div class="mx-auto">
            <img id='icon_dev' src="storage/icon-devs/mathias-schulz.jpg" 
                class="card-img-top rounded-circle" alt="mathiasarturschulz" style="width: 200px;">
        </div>
        <div class="card-body">
            <h5 class="card-title text-sucess font-weight-bold">Mathias Schulz</h5>
            <h6 class="card-subtitle mb-2 text-primary">FRONTEND DEVELOPER</h6>
            <p class="card-text font-italic">MathiasSchulz34@gmail.com<br>
                <a href="https://github.com/mathiasarturschulz" target="_blank" style="margin-right: 10px;">
                    <img width="30" src="storage/icon-social-media/icon-github.png" alt="github">
                </a>
                <a href=""></a>
                <a href="https://www.linkedin.com/in/mathiasschulz34/" target="_blank">
                    <img width="30" src="storage/icon-social-media/icon-linkedin.png" alt="linkedin">
                </a>
            </p>
        </div>
    </div>
    <div id='card' class="card text-center border-0 bg-transparent" style="width: 18rem; min-width: 200px;">
        <div class="mx-auto">
            <img id='icon_dev' src="storage/icon-devs/victor-fiamoncini.jpeg" 
                class="card-img-top rounded-circle" alt="Victor-Fiamoncini" style="width: 200px;">
        </div>
        <div class="card-body">
            <h5 class="card-title text-sucess font-weight-bold">Victor Fiamoncini</h5>
            <h6 class="card-subtitle mb-2 text-primary">DASHBOARD DEVELOPER</h6>
            <p class="card-text font-italic">victor.fiamoncini@gmail.com<br>
                <a href="https://github.com/Victor-Fiamoncini" target="_blank" style="margin-right: 10px;">
                    <img width="30" src="storage/icon-social-media/icon-github.png" alt="github">
                </a>
                <a href=""></a>
                <a href="https://www.linkedin.com/in/victor-fiamoncini-b74b72159/" target="_blank">
                    <img width="30" src="storage/icon-social-media/icon-linkedin.png" alt="linkedin">
                </a>
            </p>
        </div>
    </div>
    <div id='card' class="card text-center border-0 bg-transparent" style="width: 18rem; min-width: 200px;">
        <div class="mx-auto">
            <img id='icon_dev' src="storage/icon-devs/rodrigo-curvello.jpeg" 
                class="card-img-top rounded-circle" alt="GabiPeron" style="width: 200px;">
        </div>
        <div class="card-body">
            <h5 class="card-title text-sucess font-weight-bold">Rodrigo Curvêllo</h5>
            <h6 class="card-subtitle mb-2 text-primary">PROJECT MANAGER</h6>
            <p class="card-text font-italic">rodrigo.curvello@ifc.edu.br<br>
                <a href="https://github.com/rodrigocurvello" target="_blank" style="margin-right: 10px;">
                    <img width="30" src="storage/icon-social-media/icon-github.png" alt="github">
                </a>
                <a href=""></a>
                <a href="https://www.linkedin.com/in/rodrigocurvello/" target="_blank">
                    <img width="30" src="storage/icon-social-media/icon-linkedin.png" alt="linkedin">
                </a>
            </p>
        </div>
    </div>
</div>

</div>