import { lazy, useMemo } from "react";

import type { RoomToolboxActionConfig } from '../../views/room/contexts/RoomToolboxContext';

const RoomFilesActions = lazy(() => import('../../views/room/contextualBar/RoomFiles'));

export const useRoomFileActions = () => {
    return useMemo(
        (): RoomToolboxActionConfig => ({
            id: 'room-files',
            groups: ['channel', 'group', 'team'],
            title: 'Files',
            icon: 'attachment',
            tabComponent: RoomFilesActions,
            order: 8,
            featured: true
        }),
        []
    );
};