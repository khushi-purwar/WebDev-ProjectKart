
const EmptyValue = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
     className="EmptyValue"
     style={{ backgroundColor: colorValue,
     color: isDarkText ? "black" : "white"
    }}
    >
      <p>{colorValue ? colorValue: "No Color"}</p>
      <p>{ hexValue ? hexValue: null}</p>
    </section>
  )
}

EmptyValue.defaultProps = {
  colorValue: "No Color"
}


export default EmptyValue
