import { ProductType } from "../../services/product";
import Grid from "../Grid";
import Product from "./Product";

interface Props {
  direction?: "vertical" | "horizontal";
  products?: ProductType[];
}

const Products = ({ products }: Props) => {
  if (products) {
    return (
      <Grid cols={3}>
        {products.map((prod, i) => (
          <Product
            key={i}
            product={prod}
            // realProduct={prod}
            temId={i}
            categoryId={"categoryId"}
          />
        ))}
      </Grid>
    );
  }

  // if (direction === "horizontal") {
  //   if (products) {
  //     return (
  //       <Flex>
  //         {products.map((prod, i) => (
  //           <div key={i} className="w-[665px]">
  //             <Product
  //               // TODO: FIX this. Make it the Real Product
  //               product={dummyProducts[i]}
  //               // TODO: Remove this
  //               realProduct={prod}
  //               temId={i}
  //               isAdProduct
  //               categoryId={"prod.category"}
  //             />
  //           </div>
  //         ))}
  //       </Flex>
  //     );
  //   }

  //   return (
  //     <Flex>
  //       {dummyProducts.map((prod, i) => (
  //         <div key={i} className="w-[665px]">
  //           <Product
  //             product={prod}
  //             handleFavStatus={handleFavStatus}
  //             temId={i}
  //             isAdProduct
  //             // TODO: Remove
  //             isDummy
  //           />
  //         </div>
  //       ))}
  //     </Flex>
  //   );
  // }

  // return (
  //   <Grid cols={3}>
  //     {dummyProducts.map((prod, i) => (
  //       <Product
  //         key={i}
  //         product={prod}
  //         handleFavStatus={handleFavStatus}
  //         temId={i}
  //         // TODO: Remove
  //         isDummy
  //       />
  //     ))}
  //   </Grid>
  // );
};

export default Products;
