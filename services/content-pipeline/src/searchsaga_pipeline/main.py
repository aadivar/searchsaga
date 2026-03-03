"""CLI entry point for the SearchSaga content pipeline."""

import argparse
import logging
from . import config

logging.basicConfig(level=getattr(logging, config.LOG_LEVEL))
logger = logging.getLogger(__name__)


def main():
    parser = argparse.ArgumentParser(
        description="SearchSaga Content Pipeline — generate topic nodes"
    )
    parser.add_argument("topic", help="Topic to generate (e.g., 'How WiFi Grew Up')")
    parser.add_argument(
        "--skip-voice", action="store_true", help="Skip voice generation"
    )
    parser.add_argument(
        "--skip-images", action="store_true", help="Skip image generation"
    )
    args = parser.parse_args()

    logger.info(f"Generating topic: {args.topic}")
    # Pipeline steps will be implemented in Phase 2:
    # 1. Researcher → 2. Storyteller → 3. Card Architect → 4. Visual Architect
    # → 5. Connector → 6. Editor → 7. Publisher
    # Then: Guardian 1 (Word Shield) → Guardian 2 (Context Shield)
    # Then: Voice Agent (ElevenLabs TTS)
    logger.info("Pipeline not yet implemented. See docs/PRD.md for agent specs.")


if __name__ == "__main__":
    main()
