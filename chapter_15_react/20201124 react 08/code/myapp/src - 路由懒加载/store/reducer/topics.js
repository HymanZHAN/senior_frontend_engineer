export default function topics(topics = {
    loading: true,
    data: []
}, action) {
    switch (action.type) {
        case "TOPICS_LOADING":
            return {
                loading: true,
                data: []
            }
        case "TOPICS_LOAD":
            return {
                loading: false,
                data: action.data
            }
    }
    return topics;
}