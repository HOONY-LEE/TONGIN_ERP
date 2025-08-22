import styled from "styled-components"


interface IconProps {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
    padding?: string;
}

const Wrapper = styled.img<{
    padding?: string
}>`
    padding: ${(props) => props.padding};
`

export default function Icon(props: IconProps) {

    const { src, alt, width, height, padding } = props;

    return (
        <Wrapper src={src} alt={alt} width={width} height={height} padding={padding}></Wrapper>
    )
}