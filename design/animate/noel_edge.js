/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'open-sans, sans-serif': '<script src=\"http://use.edgefonts.net/open-sans:n7,i7,n8,i8,i4,n3,i3,n4,n6,i6:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Fond',
                            type: 'rect',
                            rect: ['0px', '150px', '600px', '600px', 'auto', 'auto'],
                            fill: ["rgba(5,29,73,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'spn-04_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            opacity: '0.6988186094819',
                            fill: ["rgba(0,0,0,0)",im+"spn-04_img.png",'0px','0px']
                        },
                        {
                            id: 'spn-01_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spn-01_img.png",'0px','0px']
                        },
                        {
                            id: 'spn-02_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spn-02_img.png",'0px','0px']
                        },
                        {
                            id: 'spn-03_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spn-03_img.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'pnt-04_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pnt-04_img.png",'0px','0px']
                        },
                        {
                            id: 'pnt-01_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pnt-01_img.png",'0px','0px']
                        },
                        {
                            id: 'pnt-02_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pnt-02_img.png",'0px','0px']
                        },
                        {
                            id: 'pnt-03_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"pnt-03_img.png",'0px','0px']
                        },
                        {
                            id: 'btm-04_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"btm-04_img.png",'0px','0px']
                        },
                        {
                            id: 'btm-01_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"btm-01_img.png",'0px','0px']
                        },
                        {
                            id: 'btm-02_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"btm-02_img.png",'0px','0px']
                        },
                        {
                            id: 'btm-03_img',
                            display: 'none',
                            type: 'image',
                            rect: ['0', '150px', '600px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"btm-03_img.png",'0px','0px']
                        },
                        {
                            id: 'Logo_Norda',
                            type: 'image',
                            rect: ['40px', '53px', '165px', '60px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo.png",'0px','0px']
                        },
                        {
                            id: 'Nos_meilleurs',
                            type: 'text',
                            rect: ['246px', '53px', '314px', '60px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: open-sans, sans-serif; color: rgb(226, 67, 1); font-weight: 700; font-size: 18px;\">Nos meilleurs vœux de santé et de bonheur pour la nouvelle année.</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Ligne',
                            type: 'rect',
                            rect: ['222px', '37px', '2px', '93px', 'auto', 'auto'],
                            fill: ["rgba(226,67,1,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Fond_rouge',
                            type: 'rect',
                            rect: ['0px', '750px', '600px', '200px', 'auto', 'auto'],
                            fill: ["rgba(226,67,1,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'equipe_Norda',
                            type: 'text',
                            rect: ['40px', '789px', '518px', '75px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: open-sans, sans-serif; color: rgb(255, 255, 255); font-weight: 100; font-style: italic;\">L’équipe de Norda Stelo</span></p><p style=\"margin: 0px;\"><span style=\"font-family: open-sans, sans-serif; color: rgb(255, 255, 255); font-weight: 100; font-style: italic;\">(anciennement Roche ltée, Groupe-conseil)</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Nordacom',
                            type: 'text',
                            rect: ['336px', '880px', '224px', '34px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: right;\">​<span style=\"color: rgb(255, 255, 255); font-weight: 300; font-family: open-sans, sans-serif;\">norda.com</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Que_2016',
                            display: 'none',
                            type: 'text',
                            rect: ['41px', '436px', '522px', '84px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-family: open-sans, sans-serif; font-weight: 600; font-size: 30px;\">Que 2016 propulse vos projets </span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(255, 255, 255); font-family: open-sans, sans-serif; font-weight: 600; font-size: 30px;\">vers de nouveaux horizons.</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'replay',
                            display: 'none',
                            type: 'image',
                            rect: ['535px', '170px', '45px', '45px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"replay.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '950px', 'auto', 'auto'],
                            sizeRange: ['320px','600px','',''],
                            overflow: 'auto',
                            fill: ["rgba(255,255,255,1.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid64",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${btm-01_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            252,
                            0,
                            "easeInQuad",
                            "${btm-01_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "display",
                            1250,
                            0,
                            "easeInQuad",
                            "${btm-01_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "opacity",
                            252,
                            499,
                            "easeInQuad",
                            "${btm-01_img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            751,
                            499,
                            "easeInQuad",
                            "${btm-01_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid116",
                            "opacity",
                            4250,
                            547,
                            "easeInQuad",
                            "${spn-01_img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            4797,
                            547,
                            "easeInQuad",
                            "${spn-01_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid200",
                            "opacity",
                            5106,
                            0,
                            "easeInQuad",
                            "${spn-04_img}",
                            '1',
                            '1'
                        ],
                        [
                            "eid199",
                            "opacity",
                            5794,
                            1206,
                            "easeInQuad",
                            "${spn-04_img}",
                            '1',
                            '0.6988186094819'
                        ],
                        [
                            "eid113",
                            "opacity",
                            2607,
                            374,
                            "easeInQuad",
                            "${pnt-02_img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid137",
                            "opacity",
                            2980,
                            374,
                            "easeInQuad",
                            "${pnt-02_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "opacity",
                            4649,
                            348,
                            "easeInQuad",
                            "${spn-02_img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid138",
                            "opacity",
                            4997,
                            348,
                            "easeInQuad",
                            "${spn-02_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${pnt-01_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            2358,
                            0,
                            "easeInQuad",
                            "${pnt-01_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid152",
                            "display",
                            3354,
                            0,
                            "easeInQuad",
                            "${pnt-01_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "opacity",
                            502,
                            373,
                            "easeInQuad",
                            "${btm-02_img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            875,
                            373,
                            "easeInQuad",
                            "${btm-02_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid120",
                            "opacity",
                            2856,
                            249,
                            "easeInQuad",
                            "${pnt-03_img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            3105,
                            249,
                            "easeInQuad",
                            "${pnt-03_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid158",
                            "opacity",
                            999,
                            0,
                            "easeInQuad",
                            "${btm-04_img}",
                            '1',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            1750,
                            751,
                            "easeInQuad",
                            "${btm-04_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid165",
                            "display",
                            122,
                            0,
                            "easeInQuad",
                            "${spn-04_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid166",
                            "display",
                            5106,
                            0,
                            "easeInQuad",
                            "${spn-04_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid72",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${spn-01_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            4250,
                            0,
                            "easeInQuad",
                            "${spn-01_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid156",
                            "display",
                            5345,
                            0,
                            "easeInQuad",
                            "${spn-01_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${spn-03_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            4847,
                            0,
                            "easeInQuad",
                            "${spn-03_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid154",
                            "display",
                            5345,
                            0,
                            "easeInQuad",
                            "${spn-03_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${pnt-04_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            3105,
                            0,
                            "easeInQuad",
                            "${pnt-04_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid153",
                            "display",
                            4500,
                            0,
                            "easeInQuad",
                            "${pnt-04_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${pnt-03_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            2856,
                            0,
                            "easeInQuad",
                            "${pnt-03_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid150",
                            "display",
                            3354,
                            0,
                            "easeInQuad",
                            "${pnt-03_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid118",
                            "opacity",
                            4847,
                            249,
                            "easeInQuad",
                            "${spn-03_img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            5096,
                            249,
                            "easeInQuad",
                            "${spn-03_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid198",
                            "opacity",
                            6122,
                            378,
                            "easeInQuad",
                            "${Que_2016}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "display",
                            6955,
                            0,
                            "linear",
                            "${replay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${btm-02_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            502,
                            0,
                            "easeInQuad",
                            "${btm-02_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid147",
                            "display",
                            1248,
                            0,
                            "easeInQuad",
                            "${btm-02_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${spn-02_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid83",
                            "display",
                            4649,
                            0,
                            "easeInQuad",
                            "${spn-02_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid155",
                            "display",
                            5345,
                            0,
                            "easeInQuad",
                            "${spn-02_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${btm-03_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            750,
                            0,
                            "easeInQuad",
                            "${btm-03_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid146",
                            "display",
                            1248,
                            0,
                            "easeInQuad",
                            "${btm-03_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${btm-04_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid77",
                            "display",
                            999,
                            0,
                            "easeInQuad",
                            "${btm-04_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid149",
                            "display",
                            2500,
                            0,
                            "easeInQuad",
                            "${btm-04_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "opacity",
                            750,
                            249,
                            "easeInQuad",
                            "${btm-03_img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid145",
                            "opacity",
                            999,
                            249,
                            "easeInQuad",
                            "${btm-03_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid111",
                            "opacity",
                            3105,
                            249,
                            "easeInQuad",
                            "${pnt-04_img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            3902,
                            598,
                            "easeInQuad",
                            "${pnt-04_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid110",
                            "opacity",
                            2358,
                            498,
                            "easeInQuad",
                            "${pnt-01_img}",
                            '0',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            2856,
                            498,
                            "easeInQuad",
                            "${pnt-01_img}",
                            '1',
                            '0'
                        ],
                        [
                            "eid67",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${pnt-02_img}",
                            'none',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            2607,
                            0,
                            "easeInQuad",
                            "${pnt-02_img}",
                            'none',
                            'block'
                        ],
                        [
                            "eid151",
                            "display",
                            3354,
                            0,
                            "easeInQuad",
                            "${pnt-02_img}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            0,
                            0,
                            "easeInQuad",
                            "${Que_2016}",
                            'none',
                            'none'
                        ],
                        [
                            "eid196",
                            "display",
                            6122,
                            0,
                            "easeInQuad",
                            "${Que_2016}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("noel_edgeActions.js");
})("EDGE-14130095");
