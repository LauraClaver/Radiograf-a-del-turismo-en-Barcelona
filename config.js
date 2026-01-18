var config = {
    style: 'mapbox://styles/lauraclaver/cmk4grjhw00lx01sg7fe8edfh',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibGF1cmFjbGF2ZXIiLCJhIjoiY21rNGY2bXFnMDBhZjNkc2g1bTdvcGV1ayJ9.NHlorohYeLtOmbiaRww_YA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Radiografía del turismo en Barcelona',
    subtitle: 'Más de la mitad de la oferta hotelera de la ciudad se concentra en espacios de alta afluencia turística',
    byline: 'Laura Claver Carner',
    footer: 'Fuente: Open Data BCN',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'fully',
            hidden: false,
            description: 'Ninguna ciudad del mundo supera a Barcelona en densidad turística. Los 101 kilómetros cuadrados de superficie de la ciudad catalana reúnen a más de 20 millones de visitantes al año, según el informe Nomad publicado en 2025. La media equivale a una densidad de más de 200 visitantes por kilómetro cuadrado. Sin embargo, la presión turística no se distribuye de forma homogénea. Para actuar en las zonas más tensionadas, el Ayuntamiento de Barcelona delimitó 15 Espacios de Gran Afluencia (EGA), de los cuales siete tienen un carácter eminentemente turístico. Son estas áreas las que concentran la mayor parte de la oferta hotelera: el 56% de los 446 hoteles de la ciudad se sitúan dentro de estos espacios.',
            location: {
                center: [2.16935, 41.39946],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'La Rambla',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/15-10-27-Vista_des_de_l%27est%C3%A0tua_de_Colom_a_Barcelona-WMA_2791.jpg/500px-15-10-27-Vista_des_de_l%27est%C3%A0tua_de_Colom_a_Barcelona-WMA_2791.jpg',
            description: 'La Rambla es el ejemplo más evidente de cómo se concentra la presión turística en Barcelona. Este eje conecta Plaza Catalunya con el puerto y acoge enclaves como el mercado de la Boquería, visitado cada año por cerca de 20 millones de personas. En ausencia de una delimitación cartográfica pública de estos espacios, este reportaje ha trasladado las delimitaciones existentes a un mapa digital, respetando su trazado y su extensión aproximada. El resultado muestra que este EGA es el que más alojamientos reúne: 120 establecimientos que agrupan el 26% de la oferta hotelera de la ciudad.',
            location: {
                center: [2.17107, 41.38272],
                zoom: 13.80,
                pitch: 40,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Sant Pere - Santa Caterina - La Ribera',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Passeig_del_Born_Barcelona_Catalonia.JPG/1280px-Passeig_del_Born_Barcelona_Catalonia.JPG',
            description: 'Sin salir del distrito de Ciutat Vella, este EGA muestra otra de las caras de la concentración turística en el centro histórico. Esta zona incluye enclaves como el Born, el mercado de Santa Caterina o el Palau de la Música Catalana. A pesar de tener una extensión similar, se diferencia de la Rambla por tener solo 24 hoteles, porque recoge el Parque de la Ciutadella y porque la configuración urbana del barrio no permite grandes construcciones.',
            location: {
                center: [2.18253, 41.38779],
                zoom: 15.00,
                pitch: 63,
                bearing: -100,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'La Barceloneta',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Aerial_view_of_Barceloneta_Beach_and_Port_Vell_in_Barcelona%2C_Spain_%2851226238126%29.jpg/1280px-Aerial_view_of_Barceloneta_Beach_and_Port_Vell_in_Barcelona%2C_Spain_%2851226238126%29.jpg',
            description: 'La presencia hotelera en esta zona es muy limitada. El cruce de datos muestra que solo cuatro hoteles se sitúan dentro del EGA de la Barceloneta, una cifra reducida si se compara con la popularidad turística de la playa. Esta menor acumulación se explica, en parte, por la escasez de suelo disponible frente al mar.',
            location: {
                center: [2.18852, 41.37335],
                zoom: 14.5,
                pitch: 70.01,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Passeig de Gràcia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Via_Barcelona_Casa_Mil%C3%A0.JPG/500px-Via_Barcelona_Casa_Mil%C3%A0.JPG',
            description: 'Este eje, que conecta el centro histórico con el Eixample, aglutina una elevada densidad de hoteles, comercios, oficinas y espacios culturales. La proximidad a grandes infraestructuras de transporte y a iconos arquitectónicos como la Casa Batlló o la Pedrera refuerza su atractivo. El análisis sitúa a este EGA como uno de los que mayor densidad hotelera, con 91 establecimientos que acaparan el 20% de la oferta.',
            location: {
                center: [2.16405, 41.38833],
                zoom: 14,
                pitch: 0,
                bearing: -9,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Sagrada Familia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sagrada_Familia_6-12-25.jpg/500px-Sagrada_Familia_6-12-25.jpg',
            description: 'De acuerdo con los datos obtenidos del informe Nomad, la Sagrada Familia es el principal exponente de esta presión turística. El icónico templo diseñado por Antoni Gaudí es el monumento más visitado de España: en 2024 vendió 4,8 millones de entradas, con cifras que superaron niveles pre-pandemia. Esta zona afronta retos como impulsar la actividad comercial de proximidad, reducir el impacto del flujo de visitantes y recuperar espacios para las actividades vecinales, según recoge el Plan de Acción del EGA de la Sagrada Familia (2024-2027).',
            location: {
                center: [2.17458, 41.40422],
                zoom: 14.5,
                pitch: 47.30,
                bearing: -79.62
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Park Güell',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/G%C3%BCell_BCN_edited.jpg/500px-G%C3%BCell_BCN_edited.jpg',
            description: 'Esta zona se encuentra alejada de la conglomeración de hoteles, de manera que el transporte público acaba cargando con las consecuencias. En 2024, los vecinos consiguieron que se eliminara la línea de autobús 116 de Google Maps para evitar que los turistas la saturen. Esta medida permite que los residentes de los barrios de Gràcia y La Salut puedan acceder al servicio, pero deriva en la saturación de otras líneas como la 24 y V19, que ahora son las principales alternativas para llegar al Parque Güell, junto a metro y taxi.',
            location: {
                center: [2.15159, 41.41464],
                zoom: 14.5,
                pitch: 10,
                bearing: -38.39,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
                        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Turó de la Rovira',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Vista_Barcelona_des_del_Tur%C3%B3_de_la_Rovira.jpg/500px-Vista_Barcelona_des_del_Tur%C3%B3_de_la_Rovira.jpg',
            description: 'El Turó de la Rovira, situado en el barrio del Carmel, es un caso similar al del Park Güell. Aunque no contiene ningún hotel, se ha convertido en un punto de gran interés turístico por sus vistas panorámicas de la ciudad y su legado histórico, vinculado a las baterías antiaéreas de la Guerra Civil. Su popularidad provoca picos de visitantes en determinados momentos del día, lo que tensiona el transporte y los servicios urbanos de los barrios circundantes.',
            location: {
                center: [2.16444, 41.41823],
                zoom: 15,
                pitch: 8.01,
                bearing: -20.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'last-chapter',
            alignment: 'fully',
            hidden: false,
            title: "Presión del turismo para la población local",
            description: `
        <p>
            Los más de 20 millones de visitantes inciden directamente en las vidas de los 1,73 habitantes de Barcelona. El desequilibrio entre población residente y afluencia turística convierte el turismo en uno de los principales retos de la ciudad. Tal como muestra el gráfico, la presión no se distribuye de manera homogénea: zonas como La Rambla y Passeig de Gràcia concentran una parte significativa de los alojamientos hoteleros y de los flujos de visitantes. Esta concentración intensifica el uso del espacio público, tensiona los servicios urbanos y alimenta el rechazo social a la masificación turística.
Ante este escenario, el Ayuntamiento ha desplegado distintas actuaciones en los EGA para mitigar el impacto del turismo en la vida cotidiana. Entre ellas destacan el refuerzo operativo de la Guardia Urbana y de los servicios de limpieza, la ampliación de la red de agentes cívicos, los programas de apoyo al comercio de proximidad, con subvenciones específicas para los EGA y campañas de civismo dirigidas a los visitantes.
Este reportaje se centra exclusivamente en el impacto de los hoteles y excluye los pisos turísticos, cuya proliferación genera un malestar añadido al incidir directamente en el acceso a la vivienda para la población local.

        </p>
        <strong>Número y porcentaje de hoteles en cada EGA turístico de Barcelona</strong>

        <div class="flourish-embed flourish-chart" 
             data-src="visualisation/27217090">
        </div>
    `,
            location: {
                center: [2.16935, 41.39946],
                zoom: 11.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
