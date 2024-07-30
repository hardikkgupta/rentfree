export default function Image({src, ...rest}) {
    src = src && src.includes('https://') ? src 
    : 'https://rentfree-app.s3.amazonaws.com/uploads/'+src;
    return (
        <img {...rest} src={src} alt={''}/>
    );
}
