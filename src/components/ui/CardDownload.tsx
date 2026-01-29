import { useRef, useState, useCallback } from 'react';
import html2canvas from 'html2canvas';
import { Button } from '@/components/ui';
import { X as XIcon } from '@/components/icons';
import { generateRandomString } from '@/utils';

interface CardDownloadProps {
  cardData: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    about?: string;
    avatar?: string;
    company?: string;
    jobTitle?: string;
    website?: string;
    linkedin?: string;
    github?: string;
    x?: string;
  };
}

export const CardDownload = ({ cardData }: CardDownloadProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const {
    firstName,
    lastName,
    email,
    phone,
    about,
    avatar,
    company,
    jobTitle,
    website,
    linkedin,
    github,
    x,
  } = cardData;

  const handleDownload = useCallback(async () => {
    if (!cardRef.current) return;

    setIsDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#0a0a0a',
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${firstName}-${lastName}-card-${generateRandomString(8)}.png`;
      link.href = image;
      link.click();
    } catch (error) {
      console.error('Failed to download card:', error);
    } finally {
      setIsDownloading(false);
    }
  }, [firstName, lastName]);

  const handleShareOnX = useCallback(() => {
    const text = `Check out my digital business card: ${firstName} ${lastName}`;
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
  }, [firstName, lastName]);

  return (
    <div className="space-y-6 flex flex-col items-center">
      {/* Card Preview for Download */}
      <div
        ref={cardRef}
        className="bg-gradient-to-br from-black-secondary/40 via-black-secondary/30 to-black-secondary/40 backdrop-blur-md border border-white/20 rounded-2xl p-8 space-y-6"
        style={{ width: '400px', minWidth: '400px', maxWidth: '400px', margin: '0 auto' }}
      >
        {/* Header Section */}
        <div className="flex items-center space-x-6">
          {avatar ? (
            <img
              src={avatar}
              alt={`${firstName} ${lastName}`}
              className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-white/20 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">
                {firstName[0]}
                {lastName[0]}
              </span>
            </div>
          )}
          <div className="flex-1 space-y-2">
            <h2 className="text-3xl font-bold text-white">
              {firstName} {lastName}
            </h2>
            {(company || jobTitle) && (
              <p className="text-lg text-stone-300">
                {jobTitle}
                {company && jobTitle && ' at '}
                {company}
              </p>
            )}
          </div>
        </div>

        {/* About Section */}
        {about && (
          <div className="space-y-2">
            <p className="text-sm leading-relaxed text-stone-300">{about}</p>
          </div>
        )}

        {/* Contact Info */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-xs">✉️</span>
            </div>
            <span className="text-sm text-stone-200">{email}</span>
          </div>
          {phone && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-xs">📞</span>
              </div>
              <span className="text-sm text-stone-200">{phone}</span>
            </div>
          )}
        </div>

        {/* Social Links */}
        {(website || linkedin || github || x) && (
          <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
            {website && (
              <div className="px-3 py-1.5 bg-white/10 rounded-lg">
                <span className="text-xs text-stone-300">🌐 Website</span>
              </div>
            )}
            {linkedin && (
              <div className="px-3 py-1.5 bg-white/10 rounded-lg">
                <span className="text-xs text-stone-300">💼 LinkedIn</span>
              </div>
            )}
            {github && (
              <div className="px-3 py-1.5 bg-white/10 rounded-lg">
                <span className="text-xs text-stone-300">💻 GitHub</span>
              </div>
            )}
            {x && (
              <div className="px-3 py-1.5 bg-white/10 rounded-lg">
                <span className="text-xs text-stone-300">𝕏 Twitter</span>
              </div>
            )}
          </div>
        )}

        {/* Branding */}
        <div className="pt-4 border-t border-white/10 text-center">
          <p className="text-xs text-stone-500">Created with Cardora</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 w-full max-w-[400px] mx-auto">
        <Button
          className="w-full bg-black text-white border border-white/20 hover:bg-white/10"
          onClick={handleDownload}
          isDisabled={isDownloading}
        >
          {isDownloading ? 'Downloading...' : '📥 Download Card'}
        </Button>
        <Button
          className="w-full bg-black-secondary/60 border border-white/20 hover:bg-white/10 text-white"
          onClick={handleShareOnX}
        >
          <span className="flex items-center justify-center space-x-2 text-white">
            <XIcon />
            <span>Share on X (Twitter)</span>
          </span>
        </Button>
      </div>
    </div>
  );
};
