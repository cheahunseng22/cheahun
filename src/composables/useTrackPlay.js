import { incrementPlayCount } from '../api/api';
import { useRouter } from 'vue-router';

export function useTrackPlay() {
    const router = useRouter();
    
    const handleTrackClick = async (trackId, routePath) => {
        try {
            // Increment play count
            await incrementPlayCount(trackId);
            
            // Dispatch event to notify Home.vue to update local data
            window.dispatchEvent(new CustomEvent('track-played', { 
                detail: { trackId } 
            }));
            
        } catch (error) {
            console.error('Error:', error);
        } finally {
            // Always navigate
            router.push(routePath);
        }
    };
    
    return { handleTrackClick };
}