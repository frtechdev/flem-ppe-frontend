/**
 * Componente da composição do Logotipo.
 *  @module Logo
 */

import { chakra, Flex, useColorModeValue } from "@chakra-ui/react";

/**
   * Monta o Componente de Logo.
   * @method Logo
   * @memberof module:Logo
   * @param {Object} props propriedades do arquivo que compõe o logo.
   */
export const Logo = (props) => (
  // <Flex justifyContent="center">
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="auto"
      height="100%"
      viewBox="0 0 300.000000 83.000000"
      preserveAspectRatio="xMidYMid meet"
      color={useColorModeValue("#2b4b84", "blue.200")}
      {...props}
    >
      <g
        transform="translate(0.000000,83.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
        
      >
        <path d="M0 415 l0 -406 108 3 107 3 3 143 3 142 189 0 190 0 0 90 c0 78 -2 90 -17 91 -10 1 -94 2 -188 3 l-170 1 -3 73 -3 72 211 0 210 0 0 95 0 95 -320 0 -320 0 0 -405z" />
        <path d="M722 418 l3 -403 305 0 305 0 0 93 0 93 -195 2 -195 2 -3 308 -2 307 -110 0 -110 0 2 -402z" />
        <path d="M1412 418 l3 -403 325 0 325 0 3 93 3 92 -221 0 -220 0 0 65 0 65 195 0 195 0 0 90 0 90 -195 0 -196 0 3 61 3 61 210 1 210 2 3 93 3 92 -326 0 -325 0 2 -402z" />
        <path d="M2140 415 l0 -405 105 0 105 0 0 230 c0 127 3 230 8 230 4 -1 52 -70 106 -155 54 -85 100 -155 100 -155 1 0 47 70 102 155 54 85 102 155 107 155 4 0 7 -103 7 -230 l0 -230 110 0 110 0 0 405 0 405 -119 0 -120 0 -83 -136 c-46 -75 -90 -145 -98 -156 -15 -19 -20 -12 -110 136 l-95 155 -117 1 -118 0 0 -405z" />
      </g>
    </chakra.svg>
  // </Flex>
);
