import type { ComponentProps } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Action from '../../Action';

type AttachmentDownloadBaseProps = Omit<ComponentProps<typeof Action>, 'icon'> & { title?: string | undefined; href: string };

const AttachmentDownloadBase = ({ title, href, disabled, ...props }: AttachmentDownloadBaseProps) => {
	const { t } = useTranslation();

	return (
		<Action
			icon='arrow-down-box'
			href={`${href}?download`}
			title={disabled ? t('Download_Disabled') : t('Download')}
			is='a'
			target='_blank'
			rel='noopener noreferrer'
			download={title}
			disabled={disabled}
			pressed
			{...props}
		/>
	);
};

export default AttachmentDownloadBase;
