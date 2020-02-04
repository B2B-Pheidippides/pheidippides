
import LayoutStatic from '../comps/LayoutStatic';
import Query from "../comps/CMSQuery";
import IMAGES_QUERY from "../apollo/cmsQueries/image";
import EVENT_QUERY from '../apollo/cmsQueries/event';

export default function Index() {
  return (
    <Query query={IMAGES_QUERY} id={1}>
    { 
      ({data: images}) => {
        return (
          <div>
          <div className="uk-background-cover"
                data-src={process.env.API_URL + images.images[0].image.url}
                data-srcset={process.env.API_URL + images.images[0].image.url} data-uk-img>
            <LayoutStatic>
                <div data-uk-height-viewport="expand: true">
                <div className="uk-container uk-position-center uk-text-center">
                  <h1 className="uk-light uk-text-italic">B2B Starting Soon!</h1>
                  <hr/>
                  <Query query={EVENT_QUERY} id={1}>
                    {
                      ({data: events}) => {
                        return (
                          <div className="uk-flex uk-flex-center uk-light" uk-countdown={"date: " + events.events[0].dtg}>
                            <div>
                              <span className="uk-countdown-number uk-countdown-days"></span>
                              <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
                            </div>
                            <span className="uk-countdown-separator uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">:</span>
                            <div>
                              <span className="uk-countdown-number uk-countdown-hours"></span>
                              <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
                            </div>
                            <span className="uk-countdown-separator uk-padding-small uk-padding-remove-top uk-padding-remove-bottom">:</span>
                            <div>
                              <span className="uk-countdown-number uk-countdown-minutes"></span>
                              <div className="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes</div>
                            </div>
                          </div>
                        );
                      }
                    }

                  </Query>

                </div>
                </div>
            </LayoutStatic>
          </div>
          </div>
        );
      }
    }
    </Query>
  );
}