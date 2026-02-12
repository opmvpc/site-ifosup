import { useEffect } from 'react';
import { seoDefaults, site } from '../data/siteData';

function setMeta(name, content, isProperty = false) {
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    if (isProperty) {
      tag.setAttribute('property', name);
    } else {
      tag.setAttribute('name', name);
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

export default function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${site.name}` : seoDefaults.title;
    const pageDescription = description || seoDefaults.description;
    const canonical = `${site.baseUrl}${path}`;

    document.title = pageTitle;
    setMeta('description', pageDescription);
    setMeta('og:title', pageTitle, true);
    setMeta('og:description', pageDescription, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonical, true);
    setCanonical(canonical);
  }, [title, description, path]);

  return null;
}