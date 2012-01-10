closure-library/closure/bin/build/closurebuilder.py \
	--root=closure-library/ \
	--root=../js/ \
	--namespace="djbreakpoint" \
	--output_mode="script" \
	closure-templates/soyutils_usegoog.js \
	> ../js/script.js
