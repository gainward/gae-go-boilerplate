java -jar closure-templates/SoyToJsSrcCompiler.jar \
  --shouldProvideRequireSoyNamespaces \
  --shouldGenerateJsdoc \
  --outputPathFormat ../js/templates/{INPUT_FILE_NAME_NO_EXT}.js \
  ../templates/sandbar.soy ../templates/mainview.soy
