include .env

serve:
	npm run dev

deploy:
	npm run build
	firebase use $(FIREBASE_PROJECT)
	firebase deploy
