// $font-faces: 
// (
//     name: "Montserrat SemiBold",
//     system-name: "Montserrat-SemiBold",
//     weight: 600,
//     style: normal,
//     filename: "montserrat-SemiBold"
//     ),
//     (
//     name: "Poppins Regular",
//     system-name: "Poppins-Regular",
//     weight: 400,
//     style: normal,
//     filename: "Poppins-Regular"
//     ),
//   (
//     name: "Poppins SemiBold",
//     system-name: "Poppins-SemiBold",
//     weight: 600,
//     style: normal,
//     filename: "poppins-600"
//   ),
//   (
//     name: "PTSerif Regular",
//     system-name: "PTSerif-Regular",
//     weight: 600,
//     style: normal,
//     filename: "PTSerif-Regular"
//   )
//   (
//     name: "PTSerif Bold",
//     system-name: "PTSerif-Bold",
//     weight: 700,
//     style: normal,
//     filename: "PTSerif-800"
//   ),
// ;

// @each $face in $font-faces {
//     @font-face {
//       font-family: map-get($face, name);
//       font-weight: map-get($face, weight);
//       font-style: map-get($face, style);
//         src: 
//           local(map-get($face, name)),
//           local(map-get($face, system-name)),
//           url('#{$path_to_font}#{map-get($face, filename)}.woff2') format(woff2),
//           url('#{$path_to_font}#{map-get($face, filename)}.woff') format(woff),
//     }
//   }


