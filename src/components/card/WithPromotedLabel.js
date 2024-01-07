/**
 * This is a higher order component.
 * Higher order component will take the component and add some extra things to the component and returns new component.
 * @param {*} RestaurantCard : Component
 */

const WithPromotedLabel = (RestaurantCard) => {

    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }

}

export default WithPromotedLabel;