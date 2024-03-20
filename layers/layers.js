var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_forest_1 = new ol.format.GeoJSON();
var features_forest_1 = format_forest_1.readFeatures(json_forest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_forest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_forest_1.addFeatures(features_forest_1);
var lyr_forest_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_forest_1, 
                style: style_forest_1,
                interactive: true,
                title: '<img src="styles/legend/forest_1.png" /> forest'
            });
var format_railway_2 = new ol.format.GeoJSON();
var features_railway_2 = format_railway_2.readFeatures(json_railway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_railway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_railway_2.addFeatures(features_railway_2);
var lyr_railway_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_railway_2, 
                style: style_railway_2,
                interactive: true,
                title: '<img src="styles/legend/railway_2.png" /> railway'
            });
var format_roadway_3 = new ol.format.GeoJSON();
var features_roadway_3 = format_roadway_3.readFeatures(json_roadway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roadway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roadway_3.addFeatures(features_roadway_3);
var lyr_roadway_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roadway_3, 
                style: style_roadway_3,
                interactive: true,
                title: '<img src="styles/legend/roadway_3.png" /> roadway'
            });
var format_cropland_4 = new ol.format.GeoJSON();
var features_cropland_4 = format_cropland_4.readFeatures(json_cropland_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cropland_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cropland_4.addFeatures(features_cropland_4);
var lyr_cropland_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cropland_4, 
                style: style_cropland_4,
                interactive: true,
                title: '<img src="styles/legend/cropland_4.png" /> cropland'
            });
var format_wasteland_5 = new ol.format.GeoJSON();
var features_wasteland_5 = format_wasteland_5.readFeatures(json_wasteland_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wasteland_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wasteland_5.addFeatures(features_wasteland_5);
var lyr_wasteland_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_wasteland_5, 
                style: style_wasteland_5,
                interactive: true,
                title: '<img src="styles/legend/wasteland_5.png" /> wasteland'
            });
var format_waterbody_6 = new ol.format.GeoJSON();
var features_waterbody_6 = format_waterbody_6.readFeatures(json_waterbody_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterbody_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterbody_6.addFeatures(features_waterbody_6);
var lyr_waterbody_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterbody_6, 
                style: style_waterbody_6,
                interactive: true,
                title: '<img src="styles/legend/waterbody_6.png" /> waterbody'
            });
var format_waterstream_7 = new ol.format.GeoJSON();
var features_waterstream_7 = format_waterstream_7.readFeatures(json_waterstream_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterstream_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterstream_7.addFeatures(features_waterstream_7);
var lyr_waterstream_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waterstream_7, 
                style: style_waterstream_7,
                interactive: true,
                title: '<img src="styles/legend/waterstream_7.png" /> waterstream'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_forest_1.setVisible(true);lyr_railway_2.setVisible(true);lyr_roadway_3.setVisible(true);lyr_cropland_4.setVisible(true);lyr_wasteland_5.setVisible(true);lyr_waterbody_6.setVisible(true);lyr_waterstream_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_forest_1,lyr_railway_2,lyr_roadway_3,lyr_cropland_4,lyr_wasteland_5,lyr_waterbody_6,lyr_waterstream_7];
lyr_forest_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Category': 'Category', 'Class': 'Class', 'fid': 'fid', });
lyr_railway_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Category': 'Category', 'Class': 'Class', 'fid': 'fid', });
lyr_roadway_3.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Category': 'Category', 'Class': 'Class', 'fid': 'fid', });
lyr_cropland_4.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Category': 'Category', 'Class': 'Class', 'fid': 'fid', });
lyr_wasteland_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Category': 'Category', 'Class': 'Class', 'fid': 'fid', });
lyr_waterbody_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Category': 'Category', 'Class': 'Class', 'fid': 'fid', });
lyr_waterstream_7.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Category': 'Category', 'Class': 'Class', 'fid': 'fid', });
lyr_forest_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Category': 'TextEdit', 'Class': 'TextEdit', 'fid': '', });
lyr_railway_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Category': 'TextEdit', 'Class': 'TextEdit', 'fid': '', });
lyr_roadway_3.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Category': 'TextEdit', 'Class': 'TextEdit', 'fid': '', });
lyr_cropland_4.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Category': 'TextEdit', 'Class': 'TextEdit', 'fid': '', });
lyr_wasteland_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Category': 'TextEdit', 'Class': 'TextEdit', 'fid': '', });
lyr_waterbody_6.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Category': 'TextEdit', 'Class': 'TextEdit', 'fid': '', });
lyr_waterstream_7.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Category': 'TextEdit', 'Class': 'TextEdit', 'fid': '', });
lyr_forest_1.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Category': 'no label', 'Class': 'hidden field', 'fid': 'inline label - visible with data', });
lyr_railway_2.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Category': 'no label', 'Class': 'hidden field', 'fid': 'inline label - visible with data', });
lyr_roadway_3.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Category': 'no label', 'Class': 'hidden field', 'fid': 'inline label - visible with data', });
lyr_cropland_4.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Category': 'no label', 'Class': 'hidden field', 'fid': 'inline label - visible with data', });
lyr_wasteland_5.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Category': 'no label', 'Class': 'hidden field', 'fid': 'inline label - visible with data', });
lyr_waterbody_6.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Category': 'no label', 'Class': 'hidden field', 'fid': 'inline label - visible with data', });
lyr_waterstream_7.set('fieldLabels', {'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'Category': 'no label', 'Class': 'hidden field', 'fid': 'inline label - visible with data', });
lyr_waterstream_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});