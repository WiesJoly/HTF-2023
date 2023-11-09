<script>
	import { onMount, onDestroy } from 'svelte';
	import L from 'leaflet';
	export let latlng;
	export let map;
	let marker;

	onMount(() => {
		var TreeIcon = L.icon({
    		iconUrl: 'src/lib/assets/tree-pin.png',
			shadowUrl: 'scr/lib/assets/tree-pin.png',
    		iconSize:     [95, 95], // size of the icon
			shadowSize:   [50, 64], // size of the shadow
    		iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
			shadowAnchor: [4, 62],  // the same for the shadow
    		popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});
		var CatIcon = L.icon({
    		iconUrl: 'src/lib/assets/cat-pin.png',
			shadowUrl: 'scr/lib/assets/cat-pin.png',
    		iconSize:     [95, 95], // size of the icon
			shadowSize:   [50, 64], // size of the shadow
    		iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
			shadowAnchor: [4, 62],  // the same for the shadow
    		popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
		});
		marker = L.marker([latlng.latitude, latlng.longitude], {icon: CatIcon}).addTo(map);

	});
	onDestroy(() => {
		marker.remove();
	});
</script>
