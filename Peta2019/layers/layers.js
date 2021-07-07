var wms_layers = [];
var format_gadm36_IDN_3_0 = new ol.format.GeoJSON();
var features_gadm36_IDN_3_0 = format_gadm36_IDN_3_0.readFeatures(json_gadm36_IDN_3_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm36_IDN_3_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_gadm36_IDN_3_0.addFeatures(features_gadm36_IDN_3_0);var lyr_gadm36_IDN_3_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gadm36_IDN_3_0, 
                style: style_gadm36_IDN_3_0,
    title: 'gadm36_IDN_3<br />\
    <img src="styles/legend/gadm36_IDN_3_0_0.png" /> <br />\
    <img src="styles/legend/gadm36_IDN_3_0_1.png" /> <br />\
    <img src="styles/legend/gadm36_IDN_3_0_2.png" /> <br />\
    <img src="styles/legend/gadm36_IDN_3_0_3.png" /> <br />\
    <img src="styles/legend/gadm36_IDN_3_0_4.png" /> <br />'
        });

lyr_gadm36_IDN_3_0.setVisible(true);
var layersList = [lyr_gadm36_IDN_3_0];
lyr_gadm36_IDN_3_0.set('fieldAliases', {'NAME_3': 'NAME_3', '<50 (m)': '<50 (m)', '50-70 (m)': '50-70 (m)', '70+ (m)': '70+ (m)', 'Jumlah (m)': 'Jumlah (m)', });
lyr_gadm36_IDN_3_0.set('fieldImages', {'NAME_3': 'TextEdit', '<50 (m)': 'TextEdit', '50-70 (m)': 'TextEdit', '70+ (m)': 'TextEdit', 'Jumlah (m)': 'TextEdit', });
lyr_gadm36_IDN_3_0.set('fieldLabels', {'NAME_3': 'no label', '<50 (m)': 'header label', '50-70 (m)': 'header label', '70+ (m)': 'header label', 'Jumlah (m)': 'header label', });
lyr_gadm36_IDN_3_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});