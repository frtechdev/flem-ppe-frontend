/**
 * Componente de Breadcrumb.
 * @module Breadcrumb
 */

import { HStack, Icon } from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";
import { useRouter } from "next/router";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BreadcrumbItem } from "components/Breadcrumb/BreadcrumbItem";

/**
 * Cria uma Breadcrumb Bar. Ao observar as rotas, cria o mapeamento do caminho,
 * o qual é adicionado dinamicamente como um item de Breadcrumb. Obrigatoriamente,
 * cria um Breadcrumb de home page, utilizando um ícone definido.
 * @method BreadcrumbBar
 * @memberof module:Breadcrumb
 * @param {Object} divider Ícone utilizado como divisor do item de Breadcrumb
 * @param {String} entities Transmite a "entity" (divisão/localização do Projeto PPE)
 * para ser adicionada dentro da Breadcrumb como item de Breadcrumb
 * @returns componente da barra de Breadcrumb com itens de Breadcrumb já construídos
 *
 */
export const BreadcrumbBar = ({ divider = ChevronRightIcon, entities }) => {
  const router = useRouter();
  const linkPath = router.asPath.split("/");
  linkPath.shift();
  const pathArray = linkPath.map((path, i) => {
    return { breadcrumb: path.replace("-"," "), href: "/" + linkPath.slice(0, i + 1).join("/") };
  });
  return (
    <HStack
      spacing={2}
      divider={<Icon as={divider} border={0} fontSize="14px" />}
    >
      <BreadcrumbItem href="/" icon={FiHome} />
      {Array.isArray(pathArray) && pathArray.map((path, idx) => (
        <BreadcrumbItem href={path.href} key={`${path.breadcrumb}${idx}`}>
          {entities.find((entity) => entity.value === path.breadcrumb)?.label||path.breadcrumb}
        </BreadcrumbItem>
      ))}
    </HStack>
  );
};
