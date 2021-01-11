class GMap {
    constructor() {
        document.querySelectorAll(`.acf-map`).forEach((el) => {
            this.new_map(el)
        })
    }

    // eslint-disable-next-line camelcase
    new_map($el) {
        const $markers = $el.querySelectorAll(`.marker`)

        const args = {
            zoom: 16,
            // eslint-disable-next-line no-undef
            center: new google.maps.LatLng(0, 0),
            // eslint-disable-next-line no-undef
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        // eslint-disable-next-line no-undef
        const map = new google.maps.Map($el, args)
        map.markers = []
        const that = this

        // add markers
        $markers.forEach(function (x) {
            that.add_marker(x, map)
        })

        // center map
        this.center_map(map)
    } // end new_map

    // eslint-disable-next-line camelcase
    add_marker($marker, map) {
        // eslint-disable-next-line no-undef
        const latlng = new google.maps.LatLng($marker.getAttribute(`data-lat`), $marker.getAttribute(`data-lng`))

        // eslint-disable-next-line no-undef
        const marker = new google.maps.Marker({
            position: latlng,
            map
        })

        map.markers.push(marker)

        // if marker contains HTML, add it to an infoWindow
        if ($marker.innerHTML) {
            // create info window
            // eslint-disable-next-line no-undef
            const infowindow = new google.maps.InfoWindow({
                content: $marker.innerHTML
            })

            // show info window when marker is clicked
            // eslint-disable-next-line no-undef
            google.maps.event.addListener(marker, `click`, function () {
                infowindow.open(map, marker)
            })
        }
    } // end add_marker

    // eslint-disable-next-line camelcase
    center_map(map) {
        // eslint-disable-next-line no-undef
        const bounds = new google.maps.LatLngBounds()

        // loop through all markers and create bounds
        map.markers.forEach(function (marker) {
            // eslint-disable-next-line no-undef
            const latlng = new google.maps.LatLng(marker.position.lat(), marker.position.lng())

            bounds.extend(latlng)
        })

        // only 1 marker?
        // eslint-disable-next-line eqeqeq
        if (map.markers.length == 1) {
            // set center of map
            map.setCenter(bounds.getCenter())
            map.setZoom(16)
        } else {
            // fit to bounds
            map.fitBounds(bounds)
        }
    } // end center_map
}

export default GMap
