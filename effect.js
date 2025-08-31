$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
    var vw;
    $(window).resize(function(){
        vw = $(window).width()/2;
        
        // TAMBAHKAN BARIS INI
        var posisiTengah = $(window).height() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();

        // Di sini kita juga perlu logika if-else agar responsif saat di-resize
        if ($(window).width() <= 768) {
            // Jarak rapat untuk mobile
            $('#b11').animate({top:posisiTengah, left: vw - 120}, 500);
            $('#b22').animate({top:posisiTengah, left: vw - 80}, 500);
            $('#b33').animate({top:posisiTengah, left: vw - 40}, 500);
            $('#b44').animate({top:posisiTengah, left: vw}, 500);
            $('#b55').animate({top:posisiTengah, left: vw + 40}, 500);
            $('#b66').animate({top:posisiTengah, left: vw + 80}, 500);
            $('#b77').animate({top:posisiTengah, left: vw + 120}, 500);
        } else {
            // Jarak lebar untuk desktop
            $('#b11').animate({top:posisiTengah, left: vw - 350}, 500);
            $('#b22').animate({top:posisiTengah, left: vw - 250}, 500);
            $('#b33').animate({top:posisiTengah, left: vw - 150}, 500);
            $('#b44').animate({top:posisiTengah, left: vw - 50}, 500);
            $('#b55').animate({top:posisiTengah, left: vw + 50}, 500);
            $('#b66').animate({top:posisiTengah, left: vw + 150}, 500);
            $('#b77').animate({top:posisiTengah, left: vw + 250}, 500);
        }
    });

    // ... (sisa kode Anda dari #turn_on dst. sudah benar) ...


	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
    vw = $(window).width()/2;
    var posisiTengah = $(window).height() / 2;

    $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
    $('#b1').attr('id','b11');
    $('#b2').attr('id','b22');
    $('#b3').attr('id','b33');
    $('#b4').attr('id','b44');
    $('#b5').attr('id','b55');
    $('#b6').attr('id','b66');
    $('#b7').attr('id','b77');

    // TAMBAHKAN LOGIKA IF-ELSE DI SINI
    if ($(window).width() <= 768) {
        // JIKA LAYAR HP (lebar <= 768px), GUNAKAN JARAK RAPAT
        $('#b11').animate({top:posisiTengah, left: vw - 120}, 500);
        $('#b22').animate({top:posisiTengah, left: vw - 80}, 500);
        $('#b33').animate({top:posisiTengah, left: vw - 40}, 500);
        $('#b44').animate({top:posisiTengah, left: vw}, 500);
        $('#b55').animate({top:posisiTengah, left: vw + 40}, 500);
        $('#b66').animate({top:posisiTengah, left: vw + 80}, 500);
        $('#b77').animate({top:posisiTengah, left: vw + 120}, 500);
    } else {
        // JIKA LAYAR DESKTOP, GUNAKAN JARAK LEBAR (Nilai asli Anda)
        $('#b11').animate({top:posisiTengah, left: vw - 350}, 500);
        $('#b22').animate({top:posisiTengah, left: vw - 250}, 500);
        $('#b33').animate({top:posisiTengah, left: vw - 150}, 500);
        $('#b44').animate({top:posisiTengah, left: vw - 50}, 500);
        $('#b55').animate({top:posisiTengah, left: vw + 50}, 500);
        $('#b66').animate({top:posisiTengah, left: vw + 150}, 500);
        $('#b77').animate({top:posisiTengah, left: vw + 250}, 500);
    }

    $('.balloons').css('opacity','0.9');
    $('.balloons h2').fadeIn(3000);
    $(this).fadeOut('slow').delay(3000).promise().done(function(){
        $('#story').fadeIn('slow');
    });
});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
    // Jeda waktu setelah kalimat hilang (sebelum kalimat baru muncul)
    $("p:nth-child("+i+")").fadeOut('slow').delay(1000).promise().done(function(){
    i=i+1;
    // Jeda waktu saat kalimat ditampilkan di layar (waktu untuk membaca)
    $("p:nth-child("+i+")").fadeIn('slow').delay(2500);
    if(i==50){
        $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
            $('.cake').fadeIn('fast');
        });
        
    }
    else{
        msgLoop(i);
    }           
    });
}
		msgLoop(0);
		
	});
});




//alert('hello');
