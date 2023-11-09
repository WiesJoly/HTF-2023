<script>
	import { onMount, onDestroy } from 'svelte';
	import L from 'leaflet';
	export let latlng;
	export let title;
	export let type;
	export let description;
	export let map;
	let marker;

	onMount(() => {
		var TreeIcon = L.icon({
    		iconUrl: 'src/lib/assets/tree-pin.png',
    		iconSize:     [95, 95], // size of the icon
    		iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    		popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});
		var CatIcon = L.icon({
    		iconUrl: 'src/lib/assets/cat-pin.png',
    		iconSize:     [95, 95], // size of the icon
    		iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    		popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});
		if(type == 2){
			marker = L.marker([latlng.latitude, latlng.longitude], {icon: CatIcon}).addTo(map).bindPopup('<b>' + title + '</b></br>' + description);
		}
		else if(type == 1){
			marker = L.marker([latlng.latitude, latlng.longitude], {icon: TreeIcon}).addTo(map).bindPopup('<b>' + title + '</b></br>' + description);
		}
		else{
		marker = L.marker([latlng.latitude, latlng.longitude]).addTo(map).bindPopup('<b>' + title + '</b></br>' + description);
	}}
	)
	
	
	onDestroy(() => {
		marker.remove();
	});
</script>
