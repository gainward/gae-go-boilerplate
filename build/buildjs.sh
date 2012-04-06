closure-library/closure/bin/build/closurebuilder.py \
	--root=closure-library/ \
	--root=../js/ \
	--namespace=${JS_NAMESPACE} \
	--output_mode="script" \
	closure-templates/soyutils_usegoog.js \
	> ${JS_OUTPUT_FILE}