$(document).ready(function() {


	var myLanguage = 'English';

	const urlParams = new URLSearchParams(window.location.search);
	const selectedLanguage = urlParams.get('ln') == null ? 'English' : urlParams.get('ln');
	//console.log("SEL: "+selectedLanguage);  
	changeLanguage('' + $("#currentPage").val() + '', selectedLanguage);
	redirectURL(selectedLanguage);

	selectTheLanguage(selectedLanguage);


	$("#chooseLanguage").change(function() {
		var selLang = $("#chooseLanguage").val();
		var languageJSON = getLanguage(selLang);

		changeLanguage('' + $("#currentPage").val() + '', selLang);
		redirectURL(selLang);

	});



	function getLanguage(expression) {



		switch (expression) {
			case 'Kannada':
				return languageJSON = {
					pageTitle: "ಕಬ್ಬಿನಾಲೆ",

					headerMenuKabbinaleLogo: "ಕಬ್ಬಿನಾಲೆ",

					headerMenuHome: "ಮುಖಪುಟ",
					headerMenuAboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
					headerMenuContactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
					headerMenuTestimonials: "ಪ್ರಶಂಸಾಪತ್ರಗಳು",


					bannerEnjoyHeaderLineSpanNText: '<span class="text-primary" >Enjoy</span> your visit',
					bannerEnjoyParagraphText: 'Lorem ipsum dolor Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					bannerEnjoyAboutUsText: "About our Kabbinale",
					sectionHistoryOfKabbinaleLineSpanNText: '<span class="text-primary">History</span> of our Kabbinale',
					sectionHistoryOfKabbinaleParagraphText: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum!',
					sectionHistoryOfKabbinaleReadMoreText: "Read More",


					//aboutUs:
					aboutusPageTagAboutUsTextH1: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ ',
					aboutusPageH1TagAboutUsTextP11: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP12: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!",

					aboutusPageTagAboutUsTextH2: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP21: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP22: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',


					aboutusPageTagAboutUsTextH3: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP31: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP32: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH4: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP41: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP42: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',




					aboutusPageTagAboutUsTextH5: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP51: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP52: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',



					aboutusPageTagAboutUsText62: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP61: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP62: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',



					aboutusPageTagAboutUsTextH7: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP71: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP72: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH8: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP81: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP82: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH9: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP91: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP92: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH10: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP101: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP102: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH11: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP111: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP112: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH12: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP121: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP122: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',


					//ContactPage:
					contactPageTagAboutUsTextH1: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					contactPageH1TagAboutUsTextP11: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					contactPageH1TagAboutUsTextP12: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',


				}
				break;
			default:
				return languageJSON = {
					pageTitle: "ಕಬ್ಬಿನಾಲೆ",

					headerMenuKabbinaleLogo: "Kabbinale",


					headerMenuHome: "Home",
					headerMenuAboutUs: "About Us",
					headerMenuContactUs: "Contact Us",
					headerMenuTestimonials: "Testimonials",


					bannerEnjoyHeaderLineSpanNText: '<span class="text-primary" >Enjoy</span> your visit',
					bannerEnjoyParagraphText: 'Lorem ipsum dolor Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					bannerEnjoyAboutUsText: "About our Kabbinale",
					sectionHistoryOfKabbinaleLineSpanNText: '<span class="text-primary">History</span> of our Kabbinale',
					sectionHistoryOfKabbinaleParagraphText: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsum!',
					sectionHistoryOfKabbinaleReadMoreText: "Read More",


					//aboutUs:
					aboutusPageTagAboutUsTextH1: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ ',
					aboutusPageH1TagAboutUsTextP11: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP12: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!",

					aboutusPageTagAboutUsTextH2: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP21: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP22: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',


					aboutusPageTagAboutUsTextH3: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP31: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP32: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH4: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP41: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP42: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',




					aboutusPageTagAboutUsTextH5: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP51: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP52: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',



					aboutusPageTagAboutUsText62: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP61: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP62: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',



					aboutusPageTagAboutUsTextH7: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP71: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP72: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH8: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP81: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP82: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH9: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP91: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP92: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH10: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP101: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP102: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH11: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP111: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP112: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',

					aboutusPageTagAboutUsTextH12: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					aboutusPageH1TagAboutUsTextP121: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					aboutusPageH1TagAboutUsTextP122: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',


					//ContactPage:
					contactPageTagAboutUsTextH1: '<span class="text-primary">About</span> our ಕಬ್ಬಿನಾಲೆ',
					contactPageH1TagAboutUsTextP11: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.',
					contactPageH1TagAboutUsTextP12: 'Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum!',



				}
		}

		return languageJSON;
	}
	/////////////////////////////////////////////////


	function changeLanguage(title, myLanguage) {
		var languageJSON = getLanguage(myLanguage);
		changeLanguageCommonPage(languageJSON);

		if (title === 'home') {
			changeLanguageIndexPage(languageJSON)
		} else if (title === 'contact') {
			changeLanguageContactUsPage(languageJSON)
		} else if (title === 'about') {
			changeLanguageAboutUsPage(languageJSON)
		} else if (title === 'testimonials') {
			changeLanguageTestimonialsPage(languageJSON)
		}

	}

	function changeLanguageCommonPage(languageJSON) {

		$("#pageTitle").html(languageJSON.pageTitle);
		$("#headerMenuKabbinaleLogo").html(languageJSON.headerMenuKabbinaleLogo);

		$("#headerMenuHome").html(languageJSON.headerMenuHome);
		$("#headerMenuAboutUs").html(languageJSON.headerMenuAboutUs);
		$("#headerMenuContactUs").html(languageJSON.headerMenuContactUs);
		$("#headerMenuTestimonials").html(languageJSON.headerMenuTestimonials);


	}


	function changeLanguageIndexPage(languageJSON) {



		$("#bannerEnjoyHeaderLineSpanNText").html(languageJSON.bannerEnjoyHeaderLineSpanNText);
		$("#bannerEnjoyParagraphText").html(languageJSON.bannerEnjoyParagraphText);
		$("#bannerEnjoyAboutUsText").html(languageJSON.bannerEnjoyAboutUsText);
		$("#sectionHistoryOfKabbinaleLineSpanNText").html(languageJSON.sectionHistoryOfKabbinaleLineSpanNText);
		$("#sectionHistoryOfKabbinaleParagraphText").html(languageJSON.sectionHistoryOfKabbinaleParagraphText);
		$("#sectionHistoryOfKabbinaleReadMoreText").html(languageJSON.sectionHistoryOfKabbinaleReadMoreText);


	}


	function changeLanguageContactUsPage(languageJSON) {
		$("#contactPageTagAboutUsTextH1").html(languageJSON.contactPageTagAboutUsTextH1);
		$("#contactPageH1TagAboutUsTextP11").html(languageJSON.contactPageH1TagAboutUsTextP11);
		$("#contactPageH1TagAboutUsTextP12").html(languageJSON.contactPageH1TagAboutUsTextP12);
	}


	function changeLanguageAboutUsPage(languageJSON) {

		$("#aboutusPageTagAboutUsTextH1").html(languageJSON.aboutusPageTagAboutUsTextH1);
		$("#aboutusPageH1TagAboutUsTextP11").html(languageJSON.aboutusPageH1TagAboutUsTextP11);
		$("#aboutusPageH1TagAboutUsTextP12").html(languageJSON.aboutusPageH1TagAboutUsTextP12);

		$("#aboutusPageTagAboutUsTextH2").html(languageJSON.aboutusPageTagAboutUsTextH2);
		$("#aboutusPageH1TagAboutUsTextP21").html(languageJSON.aboutusPageH1TagAboutUsTextP21);
		$("#aboutusPageH1TagAboutUsTextP22").html(languageJSON.aboutusPageH1TagAboutUsTextP22);



		$("#aboutusPageTagAboutUsTextH3").html(languageJSON.aboutusPageTagAboutUsTextH3);
		$("#aboutusPageH1TagAboutUsTextP31").html(languageJSON.aboutusPageH1TagAboutUsTextP31);
		$("#aboutusPageH1TagAboutUsTextP32").html(languageJSON.aboutusPageH1TagAboutUsTextP32);



		$("#aboutusPageTagAboutUsTextH4").html(languageJSON.aboutusPageTagAboutUsTextH4);
		$("#aboutusPageH1TagAboutUsTextP41").html(languageJSON.aboutusPageH1TagAboutUsTextP41);
		$("#aboutusPageH1TagAboutUsTextP42").html(languageJSON.aboutusPageH1TagAboutUsTextP42);


		$("#aboutusPageTagAboutUsTextH5").html(languageJSON.aboutusPageTagAboutUsTextH5);
		$("#aboutusPageH1TagAboutUsTextP51").html(languageJSON.aboutusPageH1TagAboutUsTextP51);
		$("#aboutusPageH1TagAboutUsTextP52").html(languageJSON.aboutusPageH1TagAboutUsTextP52);


		$("#aboutusPageTagAboutUsTextH6").html(languageJSON.aboutusPageTagAboutUsTextH6);
		$("#aboutusPageH1TagAboutUsTextP61").html(languageJSON.aboutusPageH1TagAboutUsTextP61);
		$("#aboutusPageH1TagAboutUsTextP62").html(languageJSON.aboutusPageH1TagAboutUsTextP62);


		$("#aboutusPageTagAboutUsTextH7").html(languageJSON.aboutusPageTagAboutUsTextH7);
		$("#aboutusPageH1TagAboutUsTextP71").html(languageJSON.aboutusPageH1TagAboutUsTextP71);
		$("#aboutusPageH1TagAboutUsTextP72").html(languageJSON.aboutusPageH1TagAboutUsTextP72);


		$("#aboutusPageTagAboutUsTextH8").html(languageJSON.aboutusPageTagAboutUsTextH8);
		$("#aboutusPageH1TagAboutUsTextP81").html(languageJSON.aboutusPageH1TagAboutUsTextP81);
		$("#aboutusPageH1TagAboutUsTextP82").html(languageJSON.aboutusPageH1TagAboutUsTextP82);


		$("#aboutusPageTagAboutUsTextH9").html(languageJSON.aboutusPageTagAboutUsTextH9);
		$("#aboutusPageH1TagAboutUsTextP91").html(languageJSON.aboutusPageH1TagAboutUsTextP91);
		$("#aboutusPageH1TagAboutUsTextP92").html(languageJSON.aboutusPageH1TagAboutUsTextP92);


		$("#aboutusPageTagAboutUsTextH10").html(languageJSON.aboutusPageTagAboutUsTextH10);
		$("#aboutusPageH1TagAboutUsTextP101").html(languageJSON.aboutusPageH1TagAboutUsTextP101);
		$("#aboutusPageH1TagAboutUsTextP102").html(languageJSON.aboutusPageH1TagAboutUsTextP102);
	}


	function changeLanguageTestimonialsPage(languageJSON) {
		$("#bannerEnjoyHeaderLineSpanNText").html(languageJSON.bannerEnjoyHeaderLineSpanNText);
		$("#bannerEnjoyParagraphText").html(languageJSON.bannerEnjoyParagraphText);
		$("#bannerEnjoyAboutUsText").html(languageJSON.bannerEnjoyAboutUsText);
		$("#sectionHistoryOfKabbinaleLineSpanNText").html(languageJSON.sectionHistoryOfKabbinaleLineSpanNText);
		$("#sectionHistoryOfKabbinaleParagraphText").html(languageJSON.sectionHistoryOfKabbinaleParagraphText);
		$("#sectionHistoryOfKabbinaleReadMoreText").html(languageJSON.sectionHistoryOfKabbinaleReadMoreText);
	}





	function redirectURL(myLanguage) {
		//console.log("myLanguage11: "+myLanguage);


		$('a[href]').each(function() {
			var oldUrl = $(this).attr("href");
			var newUrl = '';
			var q = "?ln=" + myLanguage + "";

			if (oldUrl.indexOf('?') !== -1) {
				//console.log("TEST1:  "+oldUrl.substring(0, oldUrl.indexOf('?')));
				var page = oldUrl.substring(0, oldUrl.indexOf('?'));
				newUrl = page + q;
				//console.log("TEST:  "+oldUrl.substring(0, oldUrl.indexOf('?'))==null);
			} else {
				newUrl = oldUrl.replace(oldUrl, oldUrl + "?ln=" + myLanguage + "");
				//console.log("TEST2:  "+oldUrl.replace(oldUrl, oldUrl+q));

			}
			//var temp = "This is a string.";
			//var count = (oldUrl.match(/'?'/g) || []).length;
			//console.log(count);
			//console.log(oldUrl.count("?") > 1);



			//console.log("OLD: "+oldUrl);
			//console.log("NEW: "+newUrl);
			//console.log("newUrl: "+newUrl);  
			$(this).attr("href", newUrl);
		});
	}


	function selectTheLanguage(languageName) {
		document.getElementById("chooseLanguage").value = '' + languageName + '';
	}















	/////////////////////////////////////////////////////////////////////////////////////////////////
	// Get the value of the "username" cookie
	function getCookie(name) {
		const cookieString = decodeURIComponent(document.cookie);
		const cookies = cookieString.split(';');
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			// Check if the cookie starts with the provided name
			if (cookie.startsWith(name + "=")) {
				// Return the value of the cookie
				return cookie.substring(name.length + 1);
			}
		}
		// Return null if the cookie is not found
		return null;
	}
	///////////////////////////////////////////////////////



	function setCookie(key, value, expiry) {
		var expires = new Date();
		expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
		document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
	}

	function getCookie(key) {
		var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
		return keyValue ? keyValue[2] : null;
	}

	function eraseCookie(key) {
		var keyValue = getCookie(key);
		setCookie(key, keyValue, '-1');
	}


	/////////////////////////////////////////////////////////////////////////////////////////////////

});