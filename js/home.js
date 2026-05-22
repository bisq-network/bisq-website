$( document ).ready( function() {

    /**************************************************
    detect os to show correct download links
    **************************************************/

    var desktop = true;
    var uAgent = navigator.userAgent || navigator.vendor || window.opera;
    var osName = "unknown";
    var downloadLink = "<site_url_placeholder>/downloads";
    var macOSArchitectureDetection = null;

    if( uAgent.indexOf( "Win" ) > -1 ) {
        osName = "win64";
    } else if( uAgent.indexOf( "Mac" ) > -1 ) {
        osName = "mac";
        macOSArchitectureDetection = detectMacOSArchitecture();
    } else if( uAgent.indexOf( "Linux" ) > -1 && ( uAgent.indexOf( "Ubuntu" ) > -1 || uAgent.indexOf( "Debian" ) > -1 ) ) {
        osName = "deb64";
    } else if( uAgent.indexOf( "Linux" ) > -1 && ( uAgent.indexOf( "Fedora" ) > -1 || uAgent.indexOf( "Red Hat" ) > -1 ) ) {
        osName = "rpm64";
    }
    downloadLink = getDownloadLink( osName );

    //mobile
    if( /android/i.test( uAgent ) ) {
        desktop = false;
        $( '.downloads-android' ).removeClass( 'hidden' ).addClass( 'shown' );
        $( '.id-all').removeClass( 'hidden' ).addClass( 'shown' );
    }
    if( /iPad|iPhone|iPod/.test( uAgent ) && !window.MSStream ) {
        desktop = false;
        $( '.downloads-ios' ).removeClass('hidden').addClass( 'shown' );
        $( '.id-all' ).removeClass( 'hidden' ).addClass( 'shown' );
    }

    //desktop
    if( desktop ) {
        if( macOSArchitectureDetection ) {
            macOSArchitectureDetection.then( function( detectedOSName ) {
                osName = detectedOSName;
                downloadLink = getDownloadLink( osName );
                showOSDownloads( osName );
            }).catch( function() {
                showOSDownloads( osName );
            });
        } else if( osName !== 'unknown' ) {
            showOSDownloads( osName );
        } else {
            $( '.id-all').removeClass('hidden').addClass('shown');
        }
    }

    //capture click on currently-selected value in dropdown (otherwise
    //link click event doesn't register on firefox)
    $( 'button.selected-os-download' ).on( 'click', function(e) {
        if( ( e.target.className ).indexOf( 'dl-' ) > -1 ) {
            return;
        } else {
            serveDownload( $( e.currentTarget ).attr( 'data-bisq-version' ), $( e.currentTarget ).attr( 'data-site-url' ) );
        }
    });

    //change dom to show downloads for the specific os
    function showOSDownloads( os ) {
        $( '.dl-' + os ).addClass( 'selected' );
        $( '.id-' + os ).removeClass( 'hidden' ).addClass( 'shown' );
        return;
    }

    function detectMacOSArchitecture() {
        if( !navigator.userAgentData || !navigator.userAgentData.getHighEntropyValues ) {
            return Promise.resolve( "mac" );
        }

        return navigator.userAgentData.getHighEntropyValues( [ "architecture" ] )
            .then( function( ua ) {
                return getMacOSNameForArchitecture( ua.architecture );
            });
    }

    function getMacOSNameForArchitecture( architecture ) {
        if( !architecture ) {
            return "mac";
        }

        var arch = architecture.toLowerCase();
        if( arch.indexOf( "arm" ) > -1 || arch.indexOf( "aarch64" ) > -1 ) {
            return "mac-aarch64";
        }
        if( arch.indexOf( "x86" ) > -1 || arch.indexOf( "amd64" ) > -1 || arch.indexOf( "x64" ) > -1 || arch.indexOf( "i386" ) > -1 || arch.indexOf( "i686" ) > -1 ) {
            return "mac-x86_64";
        }

        return "mac";
    }

    function getDownloadLink( os ) {
        if( os === "win64" ) {
            return "https://bisq.network/downloads/v<bisq_version_placeholder>/Bisq-64bit-<bisq_version_placeholder>.exe";
        }
        if( os === "mac-x86_64" ) {
            return "https://bisq.network/downloads/v<bisq_version_placeholder>/Bisq-x86_64-<bisq_version_placeholder>.dmg";
        }
        if( os === "mac-aarch64" ) {
            return "https://bisq.network/downloads/v<bisq_version_placeholder>/Bisq-aarch64-<bisq_version_placeholder>.dmg";
        }
        if( os === "deb64" ) {
            return "https://bisq.network/downloads/v<bisq_version_placeholder>/Bisq-64bit-<bisq_version_placeholder>.deb";
        }
        if( os === "rpm64" ) {
            return "https://bisq.network/downloads/v<bisq_version_placeholder>/Bisq-64bit-<bisq_version_placeholder>.rpm";
        }

        return "<site_url_placeholder>/downloads";
    }

    //for non-link clicks (i.e., the 'download for xx' text on closed dropdown)
    function serveDownload( bisqVersion, siteURL ) {
        if( downloadLink.indexOf( "<site_url_placeholder>" ) > -1 ) {
            downloadLink = downloadLink.replace( /<site_url_placeholder>/g, siteURL );
        }
        if( downloadLink.indexOf( "<bisq_version_placeholder>" ) > -1 ) {
            downloadLink = downloadLink.replace( /<bisq_version_placeholder>/g, bisqVersion );
        }
        location.href = downloadLink;
        return;
    }

    $( "[data-ga-category][data-ga-action][data-ga-label]" ).on( "click", function() {
        if( typeof ga !== "function" ) {
            return;
        }

        ga(
            "send",
            "event",
            $( this ).data( "ga-category" ),
            $( this ).data( "ga-action" ),
            $( this ).data( "ga-label" )
        );
    });

    /**************************************************
    hover actions for the "how to get started" section
    **************************************************/

    $('.step').on({
        mouseenter: function () {
            $('.step').css('opacity', 0.5),
            $(this).css('opacity', 1),
            $('.step-image').addClass('d-none').removeClass('d-block');
            $('.'+$(this).attr('data-image')).addClass('d-block').removeClass('d-none');
        },
        mouseout: function () {}
    });
});
