
import LayoutStatic from '../comps/LayoutStatic';
import Query from "../comps/CMSQuery";
import IMAGES_QUERY from "../apollo/cmsQueries/image";

export default function Index() {
  return (
    <Query query={IMAGES_QUERY} id={1}>
    { 
      ({data: images}) => {
        return ( 
          <LayoutStatic>
            <div data-uk-height-viewport="expand: true">
              <div className="uk-height-1-1 uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light"
                   data-src={process.env.API_URL + images.images[0].image.url}
                   data-srcset={process.env.API_URL + images.images[0].image.url} data-uk-img>
                <h1>Background Image</h1>
              </div>
            </div>
          </LayoutStatic>
        );
      }
    }
    </Query>
  );
}