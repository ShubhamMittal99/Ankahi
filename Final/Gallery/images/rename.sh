for name in prod*
do
	newname=gall"$(echo "$name" | cut -c5-)"
	mv "$name" "$newname"
done
