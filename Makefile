include .env

serve:
	hugo -t hugo-universal-theme --themesDir ./themes/ server;

deploy:
	hugo -t hugo-universal-theme --themesDir ./themes/;
	firebase use $(FIREBASE_PROJECT)
	firebase deploy
