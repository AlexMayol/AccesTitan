<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <title>AccesTitan - Resultado del análisis de <?php echo $_POST["url"]; ?></title>
        <link href="style/style.css" rel="stylesheet" type="text/css"/>
        <script src="code/script.js" type="text/javascript"></script>
        <meta name="keywords" lang="es" content="accesibilidad, WCAG, evaluación, test, prueba, automática, conformidad, métrica, web" />
        <meta name="description" lang="es" content="Servicio de evaluación automática de la accesibilidad web. Métrica para calcular la puntuación de las página. Informe detallado de los resultados." />
    </head>
    <body onload="printDate();score();paintScore();">
        <header>
            <a href="#main" id="first">Contenido</a>
			<h1><a href="index.html" id="logo">AccesTitan</a></h1>
			<p>Estás en: <a href="index.html">Inicio</a> > <a href="results.php">Resultados</a> </p>
        </header>
        <main>
            <h1>Análisis de la Accesibilidad Web</h1>
			
			<?php
				exec('phantomjs AccesChecks.js '.$_POST["url"]);
				$salida = file_get_contents('exit.json');
				if($salida != "" && $salida != null){
					$result = json_decode($salida, true);
?>
			<section class="info">
				<h2>Puntuaci&oacute;n global</h2>
				<span id="finalscore">9</span>
				<p><strong>Direcci&oacute;n URL: </strong><?php echo $_POST["url"]; ?> </p>
				<p id="date"></p>
			</section>
			<h2>Resultados de <span id="numpruebas"></span> pruebas realizadas: </h2>
			<ul class="view">
				<li id="link1">
					<a tabindex="0" onclick="showPassed()">Pruebas superadas</a>
				</li>
				<li id="link2">
					<a tabindex="1" onclick="showFailed()">Pruebas falladas</a>
				</li>
				<li id="link3">
					<a tabindex="2" onclick="showManual()">Revisión manual</a>
				</li>
				<li id="link4">
					<a tabindex="3" onclick="showNoapply()">Pruebas no aplicables</a>
				</li>
			</ul>
			<section id="passed" class="tests">
			<?php
			foreach($result as $div){
				$img = "<img src='img/win.png' alt='prueba superada'></img>";
				if($div['resultado']== 1){
				?>
					<div class="test">
						<a href="<?=$div['enlace']?>"><?=$div['descripcion']?></a>
						<?=$img?>
					</div>
				<?php
				}
			}
			?>
			</section>
			
			<section id="failed" class="tests">
			<?php
			foreach($result as $div){
				$img = "<img src='img/fail.png' alt='prueba fallida'></img>";
				if($div['resultado']== 2){
				?>
					<div class="test">
						<a href="<?=$div['enlace']?>"><?=$div['descripcion']?></a>
						<?=$img?>
					</div>
				<?php
				}
			}
			?>
			</section>
			
			<section id="manual" class="tests">
			<?php
			foreach($result as $div){
				$img = "<img src='img/manual.png' alt='prueba superada'></img>";
				if($div['resultado']== 3){
				?>
					<div class="test">
						<a href="<?=$div['enlace']?>"><?=$div['descripcion']?></a>
						<?=$img?>
					</div>
				<?php
				}
			}
			?>
			</section>
			
			<section id="noapply" class="tests">
			<?php
			foreach($result as $div){
				if($div['resultado']== 0){
				?>
					<div class="test">
						<a href="<?=$div['enlace']?>"><?=$div['descripcion']?></a>
					</div>
				<?php
				}
			}
			?>
			</section>
        </main>
		<?php 
		}else{
			?>
			<section class="test">
				<p>La pagina <b><?=$_POST["url"]?></b> no ha podido ser analizada. Por favor, inténtelo de nuevo desde la <a href="index.html">página principal</a>.</p>
			</section>
		<?php	
		}
		?>
		<footer>
			<p><strong>AccesTitan 2016</strong>. Desarrollo: Alejandro Mayol Carrión</p>
			<a href="info.html">Acerca </a>
			<a href="http://tfg-amc.blogspot.com.es/"> Blog de desarrollo</a>
        </footer>
    </body>
</html>