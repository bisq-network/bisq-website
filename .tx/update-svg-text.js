var readYML = require( "read-yaml" );
var readXML = require('xml-js');
var fs = require('fs');

//list of filenames to be translated
var svgList = [
    "dao_intro",
    "dao_why",
    "dao_what",
    "dao_how",
    "dao_benefits"
];

//get list of languages
var languageList = [];
var languageData = readYML.sync( "../_data/languages.yml" );
for( var o = languageData.length - 1; o >= 0; o-- ) {
    if( languageData[o].tag !== "en" ) {
        languageList.push( languageData[o].tag );
    }
}

//iterate svg files in each language and update accordingly
var stringsFilename = "";
var imageFilename = "";
var allTranslatedImageText = {};
var svgXmlOld = "";
var svgJSON = {};
var svgXmlNew = "";
for( var l of languageList ) {
    stringsFilename = "../_data/" + l + ".yml"
    allTranslatedImageText = readYML.sync( stringsFilename ).dao_images;
    
    for( var i of svgList ) {
        imageFilename = "../" + l + "/images/DAO/" + i + ".svg";
        svgXmlOld = fs.readFileSync( imageFilename, "utf8" );
        svgJSON = readXML.xml2js( svgXmlOld );
        updateText( svgJSON, allTranslatedImageText ); 

        svgXmlNew = readXML.json2xml( svgJSON, { "spaces": 2  } );
        fs.writeFileSync( imageFilename, svgXmlNew, { "encoding": "utf8" } );
    }
}

function updateText( svg, allText ) {
    for( var key in svg ) {
        if( typeof svg[key] === "object" ) {
            updateText( svg[key], allText );
        } else {
            for( var fieldKey in allText ) {
                if( svg.attributes && svg.attributes.id === fieldKey ) {
                    if( svg.attributes.id === "dao_intro_bsq" ) {
                        svg.elements[0].elements[0].text = getFieldText( allText[fieldKey], 0 );
                        svg.elements[1].elements[0].text = getFieldText( allText[fieldKey], 1 );
                        svg.elements[2].elements[0].text = getFieldText( allText[fieldKey], -1, 2 );
                    } else if( ( svg.attributes.id === "dao_benefits_burn" ) ) {
                        svg.elements[0].elements[0].text = getFieldText( allText[fieldKey], 0 );
                        svg.elements[1].elements[0].text = getFieldText( allText[fieldKey], -1, 1 );
                    } else if( ( svg.attributes.id === "dao_benefits_issuance" ) ) {
                        svg.elements[0].elements[0].text = ( getFieldText( allText[fieldKey], 0 ) + " " + getFieldText( allText[fieldKey], 1 ) );
                        svg.elements[1].elements[0].text = getFieldText( allText[fieldKey], -1, 2 );
                    } else {
                        svg.elements[0].elements[0].text = allText[fieldKey];
                    }
                    return;
                }
            }
        }
    }
}

function getFieldText( str, splitPos, splicePos ) {
    var spliceLength = 0;
    if( splitPos >= 0 ) {
        if( ( str.split(" ").length > splitPos ) && ( str.split(" ")[ splitPos ].length > 0 ) ) {
            return str.split(" ")[ splitPos ];
        } else {
            return "·"; //need empty space, but empty space doesn't work
        }
    } else {
        spliceLength = str.split(" ").splice( splicePos ).length;
        if( spliceLength > 0 ) {
            return ( str.split(" ").splice( splicePos ) ).join(" ");
        } else {
            return "·"; //need empty space, but empty space doesn't work
        }
    }
}
