import React from "react";
import { View } from "react-native";

export interface DefaultMockupProps {
    children?: React.ReactNode;
}

const DefaultMockup = (props: DefaultMockupProps) => {
    const { children } = props;
    return (
        <View className="relative mx-auto border-[#444] bg-[#444] border-[14px] rounded-[40px] h-[600px] w-[300px]">
            <View className="absolute h-[32px] w-[3px] bg-[#444] rounded-[16px] top-[72px] left-[-17px]" />
            <View className="absolute h-[32px] w-[3px] bg-[#444] rounded-[16px] top-[124px] left-[-17px]" />
            <View className="absolute h-[32px] w-[3px] bg-[#444] rounded-[16px] top-[178px] left-[-17px]" />
            <View className="absolute h-[32px] w-[3px] bg-[#444] rounded-[16px] top-[142px] right-[-17px]" />
            <View className="rounded-[20px] overflow-hidden w-[272px] h-[572px] bg-white">
                {children}
            </View>
        </View>
    )
}

export default DefaultMockup;





// import React from "react";
// import { View, StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//   container: {
//     position: "relative",
//     marginHorizontal: "auto",
//     borderColor: "#444",
//     backgroundColor: "#444",
//     borderWidth: 14,
//     borderRadius: 40,
//     height: 600,
//     width: 300,
//   },
//   line: {
//     height: 32,
//     width: 3,
//     backgroundColor: "#444",
//     position: "absolute",
//     borderRadius: 16,
//   },
//   line1: {
//     top: 72,
//     left: -17,
//   },
//   line2: {
//     top: 124,
//     left: -17,
//   },
//   line3: {
//     top: 178,
//     left: -17,
//   },
//   line4: {
//     top: 142,
//     right: -17,
//   },
//   contentWrapper: {
//     borderRadius: 20,
//     overflow: "hidden",
//     width: 272,
//     height: 572,
//     backgroundColor: "#fff",
//   },
// });

// export interface DefaultMockupProps {
//   children?: React.ReactNode;
// }

// const DefaultMockup = (props: DefaultMockupProps) => {
//   const { children } = props;

//   return (
//     <View style={styles.container}>
//       <View style={[styles.line, styles.line1]} />
//       <View style={[styles.line, styles.line2]} />
//       <View style={[styles.line, styles.line3]} />
//       <View style={[styles.line, styles.line4]} />
//       <View style={styles.contentWrapper}>{children}</View>
//     </View>
//   );
// };

// export default DefaultMockup;
