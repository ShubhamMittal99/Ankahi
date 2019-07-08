for name in *Copy.jpg
do
    mv -- "$name" "${name%Copy.jpg}4.jpg"
done
