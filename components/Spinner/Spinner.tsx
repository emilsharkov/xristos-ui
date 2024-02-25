import { Animated, Easing } from "react-native"

const Spinner = () => {
  const spinValue = new Animated.Value(0)
  
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start()
  
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  })

  return (
    <Animated.View
      className={`inline-block h-8 w-8 rounded-full border-4 border-solid border-current border-r-transparent`}
      style={{
        transform: [{rotate:spin}],
      }}
    >
    </Animated.View>
  )
}

export default Spinner