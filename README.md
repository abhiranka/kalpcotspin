<!DOCTYPE html><html><head><meta charset='utf-8'>
<meta name='viewport' content='width=device-width,initial-scale=1'>
<link rel='stylesheet' href='css/style.css'></head><body>
<h1>Denim Gallery Demo</h1>
<div class='grid'>
<div class='thumb' data-label='Fabric 101'>Fabric 101</div>
<div class='thumb' data-label='Fabric 102'>Fabric 102</div>
<div class='thumb' data-label='Fabric 103'>Fabric 103</div>
</div>
<div id='modal' class='hidden'>
<div class='box'>
<button id='close'>✕</button>
<div id='preview'>Placeholder Image</div>
<p id='caption'></p>
<div class='nav'>
<button id='prev'>◀</button>
<button id='next'>▶</button>
</div>
</div>
</div>
<script src='js/gallery.js'></script>
</body></html>