serve:
	hugo -t hugo-universal-theme --themesDir ./themes/ server;

deploy:
	hugo -t hugo-universal-theme --themesDir ./themes/;
	firebase use chiyuu-official
	firebase deploy
