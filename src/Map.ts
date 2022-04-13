export interface Mappable{
    location: {
        lat:number,
        lng:number
    }
    getInfo():string;
}

export class Map{
    private googleMap: google.maps.Map;

    addMarker(mappable: Mappable){
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.getInfo()
            })

            infoWindow.open(this.googleMap, marker);
        })
        
    }

    constructor(element: string){
        this.googleMap = new google.maps.Map(document.querySelector(element), {
            zoom:1,
            center: {
                lat: 0,
                lng: 0
            },
        })
    }
}

